const express =require('express');
const router = express.Router();
const {URL} = require("../Model/url_model")
const {user} = require("../Model/user")

//Now lets make the shortcut more freindly 
router.get("/",async(req,res)=>{
    const allurl = await URL.find({});
   return res.render('home',{urls:allurl});
})

router.get("/signup",async(req,res)=>{
    //const signup_data = await user.find()
    return res.render('signup')

})

router.get("/login",async(req,res)=>{
    //const signup_data = await user.find()
    return res.render('login')

})
 module.exports = router;