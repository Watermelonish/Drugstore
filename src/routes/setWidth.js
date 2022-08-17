const router = require('express').Router();

router.post("/setWidth", async (req, res) => {
   try {
      console.log(req.body.width)
     if (!req.session.width) {
         req.session.create(() => {
         res.clearCookie("width");
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