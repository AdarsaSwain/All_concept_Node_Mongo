const mongoose = require("mongoose");
const { createHmac, randomBytes } = require("crypto");

const user_schema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salt: {
    type: String,
  },
  profile_image: {
    type: String,
    default: "images/default.png",
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
}, { timestamps: true });

user_schema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  const salt = randomBytes(16).toString("hex");
  const hash = createHmac("sha256", salt)
    .update(user.password)
    .digest("hex");

  user.salt = salt;
  user.password = hash;
  next();
});

const BlogUser = mongoose.model("blog_user", user_schema);
module.exports = BlogUser;
