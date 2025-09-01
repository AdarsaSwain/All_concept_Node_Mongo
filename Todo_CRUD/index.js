//lets start the todo app 
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:".env"});
 const app = express();
 const port = 8001 
app.use(express.json());
const path = require("path");
app.use(express.urlencoded({ extended: true })); // ✅ Add this line

app.set("view engine","ejs")  // <-- Enable EJS view engine
app.set('views',path.resolve("./views")); // all the files is there in views

//lets put the route  
const static_route = require("./Routes/static_route");
const todo_route = require("./Routes/todo_route")

//lets connect at mongoose
mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Mongodb Succesfully Connected")) .catch((e)=>console.log("Error to connect",e));


app.use('/',static_route);
app.use('/data',todo_route);


 app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});