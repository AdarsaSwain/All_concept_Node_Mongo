const express = require('express');
const { fetchtododata ,updatetododata,deletetododata} = require('../controller/todo_controller');
const router = express.Router();

router.post("/", fetchtododata);

router.post("/:id",updatetododata);

router.get("/delete/:id",deletetododata);


module.exports = router; 
