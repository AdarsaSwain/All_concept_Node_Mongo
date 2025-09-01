//lets create a schema and model

const mongoose = require('mongoose');

const new_schema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},

{timestamps:true}
)


//lets create a model

const todo_user = mongoose.model("todo_user",new_schema);

module.exports = todo_user;