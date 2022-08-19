const renderTemplate = require('../../lib/renderTemplate');
const {Drug, User, userDrug, Story} = require('../../db/models')
const router = require('express').Router();
const BasketDrugs = require('./../../src/views/BasketDrugs')


router.post('/order', async (req, res) => {
   try {
      if (req.session.newUser){
         const {sum} = req.body
         const userMail = req.session.newUser
         const theUser = await User.findOne({where:{mail:userMail}, raw:true, include:Drug})
         const theUserDrugs = await userDrug.findAll({where:{user_id:theUser.id}, raw:true})
         console.log(theUserDrugs)
         for (let drug of theUserDrugs){
            const newHistory = await Story.create({user_id: theUser.id, item_id:drug.item_id})
         }
         await userDrug.destroy({where:{user_id:theUser.id}})

         const successMess = "Товар добавлен в корзину"
         
         
         res.json(successMess)
         
      }else{
         const goRegisterMessage = 'добавлять товары в корзину могут только зарегестрированные пользователи'
         res.json({goRegisterMessage})
      }
   }
   catch(err){
      console.error(err)
   }
})
  
  
   module.exports = router;
  