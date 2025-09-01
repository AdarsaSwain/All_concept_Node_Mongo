// service/auth.js
const jwt = require("jsonwebtoken");
const secret = "Adarsh@12";

function setUser(user) {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
    },
    secret
   //, { expiresIn: "10m" }
  );
}

function getUser(token) {
  if (!token) return null;

  try {
    return jwt.verify(token, secret);
  } catch (err) {
    return null;
  }
}

module.exports = { setUser, getUser };
