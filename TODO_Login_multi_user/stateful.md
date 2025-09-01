//Stateful and stateless
Stateful-->using cokkies()
//Memory Intensive
//Higher chance to data loss
//let create a session for the login

//Lets create a uuid to generate a unique ID in the login 
>>Link:- https://www.npmjs.com/package/uuid
>>npm install uuid
>>lets import the uuid
//const { v4: uuidv4 } = require("uuid");




//now we set the cookies then we get the cookie and then vaildate that one in the middleware 

//Login_handeler

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });

  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);
  return res.redirect("/");
}


////now we set the cookies then we get the cookies

// we will create a folder service->auth.js  

// In that we will map the sessionID 
It maps a randomly generated session ID (like a UID) to the logged-in user object.

const sessionID = new map();

function setUser(id, user) {
  sessionIdToUserMap.set(id, user);
}

function getUser(id) {
  return sessionIdToUserMap.get(id);
}

module.exports = {
  setUser,
  getUser,
};


//set a middleware to validate 

How it works:
Reads uid from cookies

Uses getUser(uid) to fetch user from the in-memory store

If user not found → redirects to /login

Else → attaches req.user and calls next()



const { getUser } = require("../service/auth");

async function restrictToLoggedinUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;

  if (!userUid) return res.redirect("/login");
  const user = getUser(userUid);

  if (!user) return res.redirect("/login");

  req.user = user;
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;

  const user = getUser(userUid);

  req.user = user;
  next();
}

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};


index.js
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlewares/auth");
app.use("/login",restrictToLoggedinUserOnly, login_model)
app.use("/", checkAuth, staticRoute);  // to validate each route and then move to the 

Breakdown:
"/" → means this middleware applies to all routes starting with / (like /, /signup, /login, etc.).

checkAuth → this is your custom middleware that:

Gets the uid from cookies.

Uses your getUser(token) (JWT decode or Map lookup).

Adds req.user = user if valid, or undefined if not.

staticRoute → this is your router with routes like:

GET / → render homepage

GET /signup → render signup form

GET /login → render login form


//State less

--> In a stateless component we create a token and that token we store in the user uid to keeep them login securly and be in the session.

//lets install JWT Token

npm install jsonwebtoken

//lets genaerate asesion id and given a secret key to authenticate with a payload

const jwttoken = require('jsonwebtoken')
const secret = "Adarsh@12"

function setuser(suer)
{
   return jwttoken.sign(
   
   _id:userUid._id;  //generate a new id 
   email:user.email
   
   )
   secret  //It wiill authenticate with our credential only

}

//then we use the token check and validate 

function getUser(token)
{
     if(1token)
	 {
	    return null;
		}
		try
		{
		   return jwttoken.verify( token,secret)
		   }
		   catch{
		   return null;
		   }
		 



//change in the handeler 		 
		   
	async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user)
    return res.render("login", {
      error: "Invalid Username or Password",
    });

  const token = setUser(user)
  res.cookie("uid", sessionId);
  return res.redirect("/");
}


//Midelwarwe

const { getUser } = require("../service/auth");

function restrictToLoggedinUserOnly(req, res, next) {
  const token = req.cookies?.uid;

  if (!token) return res.redirect("/login");

  const user = getUser(token); // jwt.verify(token, secret)
  if (!user) return res.redirect("/login");

  req.user = user;
  next();

module.exports = {
  restrictToLoggedinUserOnly,
  checkAuth,
};