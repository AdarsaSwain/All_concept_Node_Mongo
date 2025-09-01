const { user } = require("../Model/user");

const signuproute = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields required");
  }

  await user.create({ name, email, password });

  return res.status(201).send("User created");
};

module.exports = { signuproute };
