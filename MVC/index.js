import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import newroute from "./Routes/Newuser_routes.js"

const app =  express();
const port = 3000;

dotenv.config({path:".env"});
app.use(express.json());

//lets connect mongdb ATLAS
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}) .then(()=>console.log("connected successfully")).catch((err)=>console.log("error",err));


//routes
app.use("/Newuser",newroute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
