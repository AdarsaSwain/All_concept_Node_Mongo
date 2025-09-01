const express = require('express');
const user = require("../model/user")
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
    

})