
import Newuser from "../Models/Newuser_models.js"

export const gethandler = async(req,res)=>{
const body = req.body;
  const post_data = await Newuser.create({
    name:body.name,
    email:body.email
  })
  return res.status(201).json({msg:"get completed",data:post_data})
}

export const putthandler = async(req,res)=>{
let put_data = await Newuser.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
   });
   res.send(put_data)
}

export const posthandler =  async(req,res)=>{

 const body = req.body;
  const post_data = await Newuser.create({
    name:body.name,
    email:body.email

  })
  console.log(post_data);
  return res.status(201).json({msg:"sucess",data:post_data})
}

export const deletehandler = async(req,res)=>{
     let findt_data_delete = await Newuser.findByIdAndDelete(req.params.id);
  res.send(findt_data_delete);
}

