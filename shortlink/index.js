const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path:".env"})
const app = express();
app.use(express.json()); // Its middleware to perform routes(get,put, etc) Operation
const port = 8001;
const { URL } = require("./Model/url_model"); 

const redirectURL = require("./Routes/url_route")
//lets connect to the mongodb

mongoose.connect(process.env.MONGO_URI,{
 useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>console.log("Mongodb Succesfully Connected")) .catch((e)=>console.log("Error to connect",e));


//route the url request to redirect url 

app.use('/url',redirectURL);

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

  

  res.redirect(entry.redirectURL);
});



//lets connect to the port
app.listen(port, () => {
  console.log(`App is running at http://localhost:${port}`);
});
