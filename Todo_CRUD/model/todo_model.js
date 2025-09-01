//lets create a schema and model

const mongoose = require('mongoose');

const new_schema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    tasks:{
        type:String,
        required:true,
        unique:true
    }
},

{timestamps:true}
)


//lets create a model

const todo = mongoose.model("todo",new_schema);

module.exports = todo;