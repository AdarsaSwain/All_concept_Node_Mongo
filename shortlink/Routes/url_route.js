const express =require('express');
const router = express.Router();
const URL = require("../Model/url_model")
const {shorturl,countanalytics} = require("../Controller/view_controller")


router.post("/",shorturl);
 module.exports = router;

 //GET /:id - Redirects the user to the original URL 

 //GET /URL/analytics/:id - Returns the clicks for the provided

router.get("/analytics/:shortID",countanalytics);
 