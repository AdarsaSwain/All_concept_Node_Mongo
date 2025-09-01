const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:".env"})
const path = require('path');
const app = express();
app.use(express.json()); // Its middleware to perform routes(get,put, etc) Operation
app.use(express.urlencoded({extended:true})); // middleware  to read the data of form 
const port = 8001;
const { URL } = require("./Model/url_model"); 
//let add ejs
const ejs = require('ejs');
//lets add the static_route
const static_route = require("./Routes/static_route");
//lets get the ejs to fetvh the view data
app.set("view engine","ejs")  // <-- Enable EJS view engine
app.set('views',path.resolve("./views")); // all the files is there in views
const redirectURL = require("./Routes/url_route")
//lets connect to the mongodb

mongoose.connect(process.env.MONGO_URI,{
 useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Mongodb Succesfully Connected")) .catch((e)=>console.log("Error to connect",e));


//route the url request to redirect url 

app.use('/url',redirectURL);

//if anyone come to "/" page it will redirect to the staticroute
app.use("/",static_route);
app.get("/",async(req,res)=>{

  //let get all  the url
  const getallurl = await URL.find({});

   return res.render('home',{ urls: getallurl }); //that the urls has all the URL and we fetch in the view page(its a variable that contain getaalurl contents)

})

app.get("/:shortId", async (req, res) => {
  const userclickedata = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId: userclickedata },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now()
        }
      }
    },
    { new: true }
  );

  // 🔐 Always check if entry is null
  if (!entry) {
    return res.status(404).send("<h2>URL not found</h2>");
    // Or render a custom EJS error page: res.render("404");
  }

  res.redirect(entry.redirectURL);
});


//lets do to print the data in ui





//lets connect to the port
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
