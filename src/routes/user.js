// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
const renderTemplate = require("../../lib/renderTemplate");

const router = require("express").Router();
const bcrypt = require("bcrypt");

const Login = require("../views/Login");
const UserAccount = require("../views/UserAccount")
const { User } = require("../../db/models/");

router.get("/login", (req, res) => {
  renderTemplate(Login, {}, res);
});


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
