const express = require('express');
const router = express.Router();
const { signuproute } = require("../Controller/signup_controller");

router.get("/", (req, res) => {
  res.render("signup");
});

router.post("/", signuproute);

module.exports = router; 
