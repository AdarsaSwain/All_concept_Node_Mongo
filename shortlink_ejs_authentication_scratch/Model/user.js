
const mongose = require('mongoose');

const user_schema = new mongose.Schema({
    name:{
        type:String,
        required:true
        
    },
    email:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    
},
{timestamps:true})

//lets create a model for the schema 

const user = mongose.model("user",user_schema);
 module.exports = {
    user
 }
