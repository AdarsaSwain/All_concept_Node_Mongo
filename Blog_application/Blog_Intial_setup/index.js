const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const path = require('path')
const port = 8000;
const app = express();

//lets specify the path of the env
dotenv.config({path:".env"});

//lets setup view page 
app.set("view engine","ejs");
app.set("views",path.resolve('./views'));


//midleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Successfully Connected"))
  .catch((e) => console.log("❌ Error connecting to MongoDB:", e));

//routes of view page
app.get('/',async(req,res)=>{
    res.render("homepage");
})

//lets start the nodejs
app.listen(port,()=>{
   console.log( `App running :-http://localhost:${port}`)
})
