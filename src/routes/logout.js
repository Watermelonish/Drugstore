
const {User} = require('../../db/models')
const router = require('express').Router();

const Main = require('../views/Main');




router.get("/logout", async (req, res) => {
   try {
      console.log(req.session.newUser)
     if (req.session.newUser) {
         req.session.destroy(() => {
         res.clearCookie("newUser");
         res.redirect("/main");
       });
     } else {
       // ! Защита ручки от вхождения в неё
       res.redirect("/login");
     }
   } catch (error) {
     res.send(`Error ------> ${error}`);
   }
 });

   
 module.exports = router;