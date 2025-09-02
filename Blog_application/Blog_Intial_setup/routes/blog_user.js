const express = require('express');
const user = require("../model/user");
const { use } = require('react');
//lets get the router

const router = express();

router.get('/signup',async(req,res)=>{
    router.render("signup")
})

router.get('/login',async(req,res)=>{
    router.render("signup")
})

router.post('/user/signup',async(req,res)=>{
    //lets directly signup
    const {fullname,email,password} = req.body;
    await user.create({
        fullname,
        email,
        password
    })
    return res.redirect("/");

})
router.post('/user/login',async(req,res)=>{

    //lets find the data and login the user

    const user_login_data = user.findOne({email,password});
    res.render("homepage");
})
module.exports = router;