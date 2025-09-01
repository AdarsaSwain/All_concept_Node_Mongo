//lets code out the concept for the todo

//lets first do thr changes in index.js

const mongose = require('mongose');
const port = 8000

mongose.connect(process.env.mONGO_URI,{
          
}).then(()=>{console.log("connect")).catch((e)=>{console.log("error",e))



const express = require('express');
const app = express.use();

app.listen(()=>{
`http port run in ${port})



//lets create a model for teh  etodo app


const newschema = new  mongose.schema({

id:{
type:number,
unique:true,
required:true
},
tasks:{
type:string,
unique:true,
required:true
},)
{timestamp:true}
)

const todo = mongose.model("todo",newschema)


module.export = newschema;


//lets create the routes to gett he forma data


const router = expres();
router.post("/:id",postthedatatodo)
router.get("/",getthedata)

module.exports = {todo_routes}


//model to get it actioned 

const  model_todo = ()=>{

//lets create a todo model to handel the functionality 

const data  = todo.findbyid({});
//lets get the fetch the data  

if(!data)
{
  return res.status(200).send("The data are not filled")
  }
  
  return res.render("todo",data);
  
  }
  
  //todo.ejs
  
  <input type="test",name="todo">
  
 <%`data.map((i)=>{
 <ul> ${i.todo}
 </ul>`%>

}


//lets do the  signup feature 

//signup_model 



//lets 
const newschema = new  mongose.schema({

name:{
type:string,
unique:true,
required:true
},
password:{
type:string,
unique:true,
required:true
},
email{type:string}
)
{timestamp:true}
)

const user = mongose.model("user",newschema)


module.export = newschema;





//lets use route 

router.post("/signup",singuphandeler)
router.post("/login",login_handeler)



//middle of the logic

const userlogic=()=>{


const {name,password,email} = req.body

if(!name||!Password||!email)
{
    res.send.status(400).send("login failed");
}
else
{

     await user.create({name,email,password}};
}



//login logic 


const {uuid:v4} = require('uuid);

//lets route the data ans set in the session

const  functionlogin = () =>{

const userdata =  findone({email,password});
//set the cookies 
res,rediresct("/)
const token = setuser(user)
res.cookie("uid",seesioid);
return res,.rediret ("/"
//work on the middleware 










//work on multer 







//route definatipn left

https://www.npmjs.com/package/sequential-ids\

//redirect  --> done by redurecting the controler
//crud  -->done
//login/signup 


 Form to Add or Update Task
<form method="POST" action="<%= editing ? '/data/' + editing.id : '/data' %>">


If editing is truthy, we are updating → POST /data/:id

Else, it's a new task → POST /data

<input type="text" name="todo" placeholder="Enter task..."
  value="<%= editing ? editing.tasks : '' %>" required />


Input box is pre-filled with the task when editing

Else, it's empty for new task

<button type="submit">
  <%= editing ? "✏️ Update Task" : "➕ Add Task" %>
</button>


Button text changes based on editing mode

<% if (editing) { %>
  <a href="/" style="margin-left: 10px;">Cancel</a>
<% } %>


Show Cancel button only during edit mode to go back to default view

✅ 2. Task List Display
<ul>
  <% todos.forEach(element => { %>
    <li>
      <%= element.tasks %>
      <div class="actions">
        <a href="/<%= element.id %>">Edit</a>
      </div>
    </li>
  <% }) %>
</ul>


Loop through all todos passed from backend

Display each element.tasks inside <li>

Each item has an "Edit" link:

When clicked, it loads the task in the form by hitting GET /:id

That route passes editing to EJS

✨ Summary
Part	Purpose
editing ?	Controls whether the form is in "edit" or "add"
todos.forEach	Loops and displays all task items
/data/:id	Triggers update via POST when editing
/data	Adds new task via POST


