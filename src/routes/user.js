const renderTemplate = require("../../lib/renderTemplate");

const router = require("express").Router();
const bcrypt = require("bcrypt");

const Login = require("../views/Login");
const UserAccount = require("../views/UserAccount")
const { User } = require("../../db/models/");


// авторизация пользователя

router.get("/login", (req, res) => {
  renderTemplate(Login, {}, res);
}).post('/login', async (req, res) => {
  const {mail, password} = req.body;
  console.log(mail, password)
  try{
    const user = await User.findOne({where:{ mail }});
    const passCheck = await bcrypt.compare(password, user.password);
   if (passCheck){
     req.session.newUser = user.mail;
     req.session.save(() => {
       res.redirect('/main');
     });
   }else{
    const note = "Такой пользователь не найден"
    renderTemplate(Login, {note}, res);
  }
 }catch(error){
   const message = "Пользователь не найден"
   const source = '/login'
   res.send(`Error ------> ${error}`);
   }
})


//userPages
router.post("/user", async (req, res) => {

  const { mail, login, password } = req.body
  try {
    const hash = await bcrypt.hash(password, 10);
    let searched = await User.findOne({where: {mail}, raw: true});
    console.log(searched)
    if (searched) {
      return res.send('Пользователь уже зарегистрирован');
          } else {
            const newUser = await User.create({ mail, login, password: hash });
            req.session.newUser = newUser.mail;
      req.session.save(() => {

        res.redirect('/main'); // проверить после создания /user

      });

          }     
  } catch (error) {
    res.send((`Error ------> ${error}`))
  }
}).get("/user", async (req, res) => {
  const newUser = req.session?.newUser;
  console.log(newUser)
  try{
    const theUser = await User.findOne({where:{mail:newUser}, raw: true})
    renderTemplate(UserAccount, {theUser}, res);

  } catch(err){
    console.log(err)
  }
}).delete("/user", async (req, res) => {
  const newUser = req.session?.newUser;
  try{
    const theUser = await User.destroy({where:{mail:newUser}})
    
    res.json({delete:'200'})
  } catch(err){
    console.log(err)
  }
}).put("/user", async (req, res)=> {
  const newUser = req.session?.newUser;
  const {newMail, newLogin, newPassword, password} = req.body;
  console.log(newPassword)
  try{

    const theUser = await User.findOne({where:{mail:newUser}})
    const passCheck = await bcrypt.compare(password, theUser.password);
    if(passCheck){
      if (newMail){
      await theUser.update({mail:newMail})
      req.session.newUser = newMail;
      req.session.save(() => {
      res.json({ isChangeSuccessful: true });
      });
    }
      if (newLogin){
      await theUser.update({ login: newLogin })
      res.json({ isChangeSuccessful: true });
    }
      if (newPassword){
      const hash = await bcrypt.hash(newPassword, 10);
      await theUser.update({password:hash})
      res.json({ isChangeSuccessful: true });

    }
  }else{
    res.json({ wrongPassword: true });
  }
  
  }catch(error){
    console.log(error)
  }
})





module.exports = router;
