const express = require('express');
const { signup_data } = require('../controller/signup_controller');
const router = express.Router();

// This is already /signup via app.use('/signup', signup_route)
router.post("/", signup_data);  
module.exports = router;
