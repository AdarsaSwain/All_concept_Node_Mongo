const express = require('express');
const router = express.Router();
const { loginroute } = require('../Controller/login_controller');

// Show login form
router.get("/", (req, res) => {
  res.render("login");
});

// Handle login submission
router.post("/", loginroute); // NOT /login again!

module.exports = router;
