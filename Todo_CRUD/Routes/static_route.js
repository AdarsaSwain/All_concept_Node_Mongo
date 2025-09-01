const express =require('express');
const router = express.Router();
const todo = require("../model/todo_model"); 
router.get("/",async(req,res)=>{
    const allTodos = await todo.find({});
   return res.render('home',{todos: allTodos,
    editing: null
   });
})

router.get("/:id",async(req,res)=>{
// we will get the id 
const id = parseInt(req.params.id); // Parse ID from URl
const allTodos = await todo.findOne({id});
const editing = await todo.find({});

//now we will push the data of the dited value 

return res.render('home', { todos: allTodos, editing }); 
})




module.exports = router; 