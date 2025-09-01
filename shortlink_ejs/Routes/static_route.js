const express =require('express');
const router = express.Router();
const {URL} = require("../Model/url_model")
//Now lets make the shortcut more freindly 
router.get("/",async(req,res)=>{
    const allurl = await URL.find({});
   return res.render('home',{urls:allurl});
})
 module.exports = router;