const todo = require("../model/todo_model");

const fetchtododata = async (req, res) => {
  const body = req.body;

  if (!body.todo) {
    return res.status(400).send("Task is required");
  }

 
 

  await todo.create({

    tasks: body.todo,
     userId: req.user._id
  });

  return res.redirect("/") // or redirect to home
};


const updatetododata = async(req,res)=>{
  //now we will get the to 
  //lets get th etodo data and update and resend it to the home page
     const id = req.params.id;  // to get it from the id
     //let get the update task
     const update_task = req.body.todo;

  await todo.findOneAndUpdate({
    id:parseInt(id)

  },
{tasks:update_task},{
  new:true
})
return res.redirect("/") // or redirect to home
}

const deletetododata = async (req, res) => {
  const delete_id = parseInt(req.params.id); // convert string to number
  await todo.findOneAndDelete({ id: delete_id });
  return res.redirect("/");
};





module.exports = { fetchtododata ,
  updatetododata,  deletetododata
};

