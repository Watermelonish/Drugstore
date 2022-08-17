const renderTemplate = require("../../lib/renderTemplate");

const router = require("express").Router();
const bcrypt = require("bcrypt");

const Login = require("../views/Login");
const { User } = require("../../db/models/");

// авторизация пользователя
router.get("/login", (req, res) => {
  renderTemplate(Login, {}, res);
}).post('/login', async (req, res) => {
  const {login, password} = req.body;
  console.log(login, password)
  try{
    const user = await User.findOne({where:{ login }});
    const passCheck = await bcrypt.compare(password, user.password);
   if (passCheck){
     req.session.newUser = user.login;
     req.session.save(() => {
       res.redirect('/');
     });
   }else{
   res.redirect('/login')
  }
 }catch(error){
   const message = "Пользователь не найден"
   const source = '/login'
   res.send(`Error ------> ${error}`);
   }
})

// создание нового пользователя
router.get("/user", (req, res) => {
  renderTemplate(User, {}, res);
}).post("/user", async (req, res) => {
  const { mail, login, password } = req.body
  try {
    const hash = await bcrypt.hash(password, 10);
    let searched = await User.findOne({where: {login: login}, raw: true});
    if (searched) {
      return res.send('Пользователь уже зарегистрирован');
          } else {
            const newUser = await User.create({ mail, login, password: hash });
            req.session.newUser = newUser.login;
      req.session.save(() => {
        res.redirect('/main'); 
      });

          }     
  } catch (error) {
    res.send(`Error ------> ${error}`);
  }
});


// * 19 Ручка для выхода пользователя с уничтожением куки и файла сессии
// app.get("/logout", async (req, res) => {
//   try {
//     if (req.session.newUser) {
//         req.session.destroy(() => {
//         res.clearCookie("Cookie");
//         res.redirect("/");
//       });
//     } else {
//       // ! Защита ручки от вхождения в неё
//       res.redirect("/");
//     }
//   } catch (error) {
//     res.send(`Error ------> ${error}`);
//   }
// });

module.exports = router;
