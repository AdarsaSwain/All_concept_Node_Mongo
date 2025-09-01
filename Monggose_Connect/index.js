import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"

const app =  express();
const port = 3000;

dotenv.config({path:".env"});
app.use(express.json());

//lets connect mongdb ATLAS
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then(()=>console.log("connected successfully")).catch((err)=>console.log("error",err));

///lets create a schema 

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

app.get("/Newuser",async(req,res)=>{
   const  user = await Newuser.find();
     res.send(user);
})

//lets create a space where we can add data inside the db
app.post("/Newuser",async(req,res)=>{
  const body = req.body;
  const post_data = await Newuser.create({
    name:body.name,
    email:body.email

  })
  console.log(post_data);
  return res.status(201).json({msg:"sucess",data:post_data})
  
})
//let put the data

app.put("/Newuser/:id",async(req,res)=>{
  //let put the data by searching through id
   let put_data = await Newuser.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
   });
   res.send(put_data)
})

app.delete("/Newuser/:id",async(req,res)=>{
  let findt_data_delete = await Newuser.findByIdAndDelete(req.params.id);
  res.send(findt_data_delete);
})


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
