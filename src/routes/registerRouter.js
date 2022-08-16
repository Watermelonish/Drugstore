// const ReactDOMServer = require('react-dom/server');
// const React = require('react');
const renderTemplate = require("../../lib/renderTemplate");

const router = require("express").Router();
const bcrypt = require("bcrypt");

const Login = require("../views/Login");
const { User } = require("../../db/models/");

router.get("/", (req, res) => {
  renderTemplate(Login, {}, res);
});


router.post("/", async (req, res) => {
  const { mail, login, password } = req.body
  // try {
    const hash = await bcrypt.hash(password, 10);
    let searched = await User.findOne({where: {login: login}, raw: true});
    if (searched) {
      return res.send('Пользователь уже зарегистрирован');
          } else {
            const newUser = await User.create({ mail, login, password: hash });
            req.session.newUser = newUser.login;
      req.session.save(() => {
        res.redirect('/'); // проверить после создания /user
      });

          }
          
          
  // } catch (error) {
  //   res.send(`Error ------> ${error}`);
  // }
});

module.exports = router;
