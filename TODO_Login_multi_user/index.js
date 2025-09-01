// Import modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require("path");
const cookieParser = require("cookie-parser");

// Config
dotenv.config({ path: ".env" });
const app = express();
const port = 8001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ For reading JWT from cookies

// Set view engine
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

// Import routes
const todo_route = require("./Routes/todo_route");
const signup_route = require("./Routes/signup_route");
const login_route = require("./Routes/login_route");
const static_route = require('./Routes/static_route');
const { restrictToLoggedinUserOnly, checkAuth } = require("./midleware/auth");

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Successfully Connected"))
  .catch((e) => console.log("❌ Error connecting to MongoDB:", e));

// Public routes
app.use("/signup", signup_route);
app.use("/login", login_route);

// Protected routes
app.use("/data", restrictToLoggedinUserOnly, todo_route);

// Static homepage route with optional user
app.use("/", checkAuth, static_route);

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running: http://localhost:${port}`);
});
