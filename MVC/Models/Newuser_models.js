
///lets create a schema 

import mongoose from "mongoose";

const create_schema = new  mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  }
})

//lets create a modals
const Newuser = mongoose.model("Newuser",create_schema);
console.log(Newuser);

export default Newuser; // ✅ ES Module syntax
