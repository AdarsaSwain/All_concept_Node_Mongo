//lets create a schema and model

const mongoose = require('mongoose');

const new_schema = new mongoose.Schema({
    
    tasks:{
        type:String,
        required:true,
        unique:true
    },
     userId: {  // 🔥 Link todo to user
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'todo_user'
    }
},

{timestamps:true}
)


//lets create a model

const todo = mongoose.model("todo",new_schema);

module.exports = todo;