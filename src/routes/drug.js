const renderTemplate = require('../../lib/renderTemplate');
const {Drug} = require('../../db/models')
const router = require('express').Router();
const bcrypt = require('bcrypt');

const Main = require('../views/Main');
 

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
  
  
  
   module.exports = router;
  