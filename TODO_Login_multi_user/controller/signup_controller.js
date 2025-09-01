const todo_user = require("../model/signup_model");

const signup_data = async(req,res)=>{

    //let get the signup data 
    const{email,password} = req.body;

    if(!email || !password)
    {
      return  res.status(400).json("Kindly enter wrong email and password");
    }
   
    await todo_user.create({
        email,
        password
    })
  return res.status(201).send("User created");
}
module.exports = {signup_data};