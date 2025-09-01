const todo_user = require("../model/signup_model");
const { setUser } = require("../service/auth");

const login_data = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json("Kindly enter correct email and password");
  }

  const find_the_user = await todo_user.findOne({ email, password });

  if (!find_the_user) {
    return res.status(400).json("Kindly Signup as the data is not present");
  }

  const token = setUser(find_the_user); // ✅ FIXED
  res.cookie("uid", token);
  return res.redirect("/");
};

module.exports = { login_data };
