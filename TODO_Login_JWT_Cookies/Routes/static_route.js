const express =require('express');
const router = express.Router();


router.get("/signup", async (req, res) => {
  return res.render("signup");
});

router.get("/login", async (req, res) => {
  return res.render("login");
});

const todo = require("../model/todo_model"); 
router.get("/", async (req, res) => {
  const allTodos = await todo.find({});
  return res.render("home", {
    todos: allTodos,
    editing: null,
    user: req.user || null
  });
});

router.get("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const allTodos = await todo.find({});
  const editing = await todo.findOne({ id });

  return res.render("home", {
    todos: allTodos,
    editing,
    user: req.user || null
  });
});


module.exports = router; 