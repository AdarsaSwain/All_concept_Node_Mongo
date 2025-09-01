//lets create a schema 

const mongoose = require('mongoose');

//we need three thing shortId,redirectURL,visitHistory
const new_schema = new mongoose.Schema({

    shortId:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true,

    },
    //we need a timespam for this
    visitHistory:[{timestamp:{type:Number}}],
},
{timestamps:true} 

);

//lets create a model 
const URL = mongoose.model("url",new_schema);

module.exports = {
    URL
}