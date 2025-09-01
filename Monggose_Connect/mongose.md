Node Js 
Connecting to mongodb 
Creting a schema --> Define the structure
Creating a model --> Define a model 
Performing crud operation 

Mongodb
++No sql :- It store data in documented format
++It store data in BSON Format

Mongodb Command   (If we install mongodb shell or locally instaling it)
>Show dbs
>use  <db name>  --> To go inside the database
>show collection --> All the collection inside that db
>db.call.find()  --> It show all the document inside the db
>db.call.insert() --> To inser the data in the database


Mongodb connect (using Atlas)

>>npm install mongodb --> It will install mongodb 
>>npm install dotenv --> Then we can create .env file and store the credentials (ex:- mongo_uri = mongodb+srv://devlopercontent:Adx12@cluster0.7cyoy2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0)
>>Then we can call it anywhere where we required :- require("dotenv").config(); or const dotenv = require("dotenv");
dotenv.config({ path: ".env" });  (require('dotenv'): imports the dotenv package.
.config(): runs it, so all variables in .env file become available in process.env.)
>>we can install mongose  (npm i monggose) to use it smoothly

>>(process.env.MONGO_URI,{
useNewUrlParser: true,
useUnifiedTopology: true
}) --> to connect to the mongo uri inside the env
It fetches the MongoDB connection string from the .env file.

Keeps the code secure and configurable.

🔹 useNewUrlParser: true
Uses the new MongoDB URL parser (instead of the old legacy parser).

Fixes some connection string issues and ensures compatibility with modern MongoDB URIs.

🔹 useUnifiedTopology: true
Enables the new server discovery and monitoring engine.

Helps with better handling of connection pooling, monitoring, and replica sets.

//full code of mongo connect (In sandbox and local)
const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
import express from "express";
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.json());
//let first connct to mongodb

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected Succesfully"))
  .catch(() => console.log("Error to connect"));

app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});


//lets create a Schema 
//lets create a schema for our DB
const new_schema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  age: {
    type: Number,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  }
});

//let create model to store the schema
const user = mongoose.model("user", new_schema);  // model will be created with a name of user

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
import express from "express";
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.json());
//connecting to the mongodb
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected Succesfully"))
  .catch((err: any) => console.log("Error to connect", err));

//lets create a schema for our DB
const new_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

//let createa model to store the schema
const user = mongoose.model("user", new_schema);

//les vaildate then add the data in the model


console.log(user);
app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});


//lets do the crud operation
//les vaildate then create the data in the model
app.post("/user", async (req, res) => {
  let body = req.body;
  const result = await user.create({
    name: body.name,
    age: body.age,
    email: body.email,
  });
  res.status(201).json(result);
  console.log(result);
});



Mongoose findByIdAndUpdate() Function
Last Updated : 24 Mar, 2025
Mongoose’s findByIdAndUpdate() function is a powerful tool for updating documents in MongoDB based on their unique _id. It provides a clean and efficient way to modify data, making it an essential method for performing updates in Node.js applications. In this article, we’ll explore the syntax, parameters, and use cases of the findByIdAndUpdate() function, as well as provide a practical example.

What is Mongoose findByIdAndUpdate() Function?
The findByIdAndUpdate() function in Mongoose is used to find a document by its _id and update it with new data. This method is atomic, meaning it ensures that the find and update operations are performed together, providing reliability and consistency.

It's particularly useful when we need to update a document and already know its unique identifier (_id). The findByIdAndUpdate() function is used to find a matching document, update it according to the update arg, passing any options, and return the found document (if any) to the callback.

Syntax:
Model.findByIdAndUpdate(id, update, options, callback);

Parameters
1. id: The unique_id of the document we want to update.

2. update: An object containing the fields to be updated along with their new values

3. options: (Optional) An object specifying options such as new, upsert, runValidators, etc.

new: If set to true, returns the modified document rather than the original. Defaults to false.
upsert: If true, creates the document if it doesn’t exist. Defaults to false.
runValidators: If true, runs schema validation during the update. Defaults to false.

https://www.geeksforgeeks.org/mongodb/mongoose-findbyidandupdate-function/

//mongoosewith crud operation 

const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
import { create } from "domain";
import express from "express";
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.json());
//connecting to the mongodb
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected Succesfully"))
  .catch((err: any) => console.log("Error to connect", err));

//lets create a schema for our DB
const new_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

//let createa model to store the schema
const user = mongoose.model("user", new_schema);

//les vaildate then create the data in the model
app.post("/user", async (req, res) => {
  let body = req.body;
  const result = await user.create({
    name: body.name,
    age: body.age,
    email: body.email,
  });
  res.status(201).json(result);
  console.log(result);
});

//get the requese
app.get("/user", async (req, res) => {
  let data = await user.find();
  res.send(data);
});

//let get the put details
app.put("/user/:id", async (req, res) => {
  let sent_data = await user.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.send(sent_data);
});

app.delete("/user/:id", async (req, res) => {
  let sent_delete = await user.findByIdAndDelte(req.params.id);
  res.send(sent_delete);
});
console.log(user);
app.listen(port, () => {
  console.log(`Sandbox listening on port ${port}`);
});



 Testing Crdentials:
mongodb+srv://devlopercontent:Adx12@cluster0.7cyoy2p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

{
  name: 'Adarsh',
  email: 'adarsh@example.com',
  _id: new ObjectId('688b7f007a9cf68cfbbe6452'),
  __v: 0
}
Postman Testing:- 
![alt text](image.png)
![alt text](image-1.png)