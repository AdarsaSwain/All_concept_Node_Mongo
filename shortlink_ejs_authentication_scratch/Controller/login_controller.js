const {user}  = require("../Model/user");

const loginroute = async(req,res)=>{
    //we will saerch for the whole body here of the login data 
     const {email,password} = req.body;
     if(!email||!password)
     {
        return res.status(400).send("All fields required");
     }
   
        //we will search the data and authenticate it to take it to login page 
     const login_user =   await user.findOne({email,password})
     if(!login_user)
     {
      
        return res.status(400).send("Invalid Credentials");
     }
     return res.redirect("/");
}

module.exports = { loginroute };


