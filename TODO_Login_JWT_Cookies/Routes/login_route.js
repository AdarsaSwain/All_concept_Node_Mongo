const express = require('express');
const { login_data } = require('../controller/login_controller');
const router = express.Router();


router.post("/", login_data);  
module.exports = router;
