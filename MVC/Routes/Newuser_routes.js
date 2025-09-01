import express from "express";
import {gethandler,putthandler,posthandler,deletehandler} from "../Controller/Newuser_controller.js"
//Now we will use routes for the easier approach as we dont have app define over here
const router = express.Router();

router.get("/",gethandler)

//lets create a space where we can add data inside the db
router.post("/",posthandler)
//let put the data

router.put("/:id",putthandler)
  //let put the data by searching through id)

router.delete("/:id",deletehandler)

export default router; // ✅ ES Module syntax
