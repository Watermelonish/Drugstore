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
})





module.exports = router;
