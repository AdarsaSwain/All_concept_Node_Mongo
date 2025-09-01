//Implementing EJS for the shortend url to show in the frontend

>>lets install EJS
>>Link to follow:- https://ejs.co/

//To Print the data in the UI

//lets do to print the data in ui

app.get("/link",async(req,res)=>{

  //let get all  the url
  const getallurl = await URL.find({});

   return res.send(`
    <h1>welcome</h1>
    
    <ul>
    ${getallurl.map(url=>`<li>${url.shortId}</li>-<li>${url.redirectURL}</li>-<li>${url.visitHistory.length}</li>`)}
    </ul>`).join("")

})

//let implement ejs
//lets get the ejs to fetvh the view data
app.set("view engine","ejs")  // <-- Enable EJS view engine // <-- Enable EJS view engine

app.get("/link",async(req,res)=>{

  //let get all  the url
  const getallurl = await URL.find({});

   return res.render("view",{url:getallurl})   // so all the geturl data will be used as url in the view pages

})


//How to Render the same data in view pages

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Data Fetching In EJS</h1>

    <% urls.forEach(url => { %>
        <li>
            <b>shortid:</b><%= url.shortId %><br/>
        </li>
     
    <% }) %>
</body>
</html>


app.get("/",async(req,res)=>{

  //let get all  the url
  const getallurl = await URL.find({});

   return res.render('home',{ urls: getallurl }); //that the urls has all the URL and we fetch in the view page(its a variable that contain getaalurl contents)

})



//now lets create a static route for our operation
const express =require('express');
const router = express.Router();

//Now lets make the shortcut more freindly 
router.get("/",async(req,res)=>{
   return res.render('home');
})
 module.exports = router;
 
//Crete a form and take the url and give thm a short Id urls
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Data Fetching In EJS</h1>

<Form method="post" action="/url">

    <input type="text" name="url">Enter the URL
    <button type="submit">Generate</button>
    <h1>Url After becoming short</h1>
    <% if (locals.id) { %>
        <p>Url will be : http://localhost:8001/<%= id %></p>
     
    <% } %>
</Form>
</body>
</html>

app.use("/",static_route);


//now lets all the data in  the table 



//work on table -->left 

router.get("/",async(req,res)=>{
    const allurl = await URL.find({});
   return res.render('home',{urls:allurl});
})  --> Taking all the data

//And printng it on the home page 

<% if (locals.urls) { %>
  <table>
    <thead>
      <th>S. No</th>
      <th>Short ID</th>
      <th>Original URL</th>
      <th>Visit Count</th>
      <th>Action</th>
    </thead>
    <tbody>
      <% urls.forEach((url, index) => { %>
        <tr>
          <td><%= index + 1 %></td>
          <td><%= url.shortId %></td>
          <td><%= url.redirectURL %></td>
          <td><%= url.visitHistory.length %></td>
          <td><a href="/<%= url.shortId %>" target="_blank">Visit</a></td>
        </tr>
      <% }) %>
    </tbody>
  </table>
<% } %>


