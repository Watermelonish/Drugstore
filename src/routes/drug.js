const renderTemplate = require('../../lib/renderTemplate');
const {Drug, User, userDrug} = require('../../db/models')
const router = require('express').Router();
const bcrypt = require('bcrypt');
const BasketDrugs = require('../views/BasketDrugs')
const Main = require('../views/Main');
const UserAccount = require('../views/UserAccount');
const { render } = require('react-dom');
 

router.get('/main', async (req, res) => {

   try{
   const drugs = await Drug.findAll({raw:true})
   console.log(drugs)
   renderTemplate(Main, {drugs}, res)
   }
   catch(err){
      console.log(err)
   }
   })

router.post('/drug', async (req, res) => {
   try {
      if (req.session.newUser){
         const {id} = req.body
         const userMail = req.session.newUser
         const theUser = await User.findOne({where:{mail:userMail}, raw:true})
         const theDrug = await Drug.findOne({where:{id}, raw:true})
         const newUserDrug = await userDrug.create({user_id: theUser.id, item_id:theDrug.id})
         const successMess = "Товар добавлен в корзину"
         res.json({successMess})
      }else{
         const goRegisterMessage = 'добавлять товары в корзину могут только зарегестрированные пользователи'
         res.json({goRegisterMessage})
      }
   }
   catch(err){
      console.error(err)
   }
}).get('/drug', async (req, res) => {
   try {
      if (req.session.newUser){
         console.log(req.session.newUser)
         const theUser = await User.findAll({where: {mail: req.session.newUser}, include: Drug, raw:true})

         
         renderTemplate(BasketDrugs, {theUser}, res)

      }else{
         
         res.redirect('/login')
      }
   }
   catch(err){
      console.error(err)
   }
})
  
  
   module.exports = router;
  