const shortid = require("shortid");
const { URL } = require("../Model/url_model"); 



const shorturl = async(req,res)=>{

//let declare a body that hit and return the data in that body
   const body = req.body;
    
    const newshortid = shortid();

    ///lets have a check if a anyone doesnot hit the request body 
   if(!body.url) return res.status(400).json({error : 'url is required'})
    ///lets create the the data to be push to the mongo 

    await URL.create({
    shortId:newshortid,
    redirectURL:body.url,
    visitHistory:[]
    


    })
    res.json({id:newshortid})

    
}

const countanalytics = async(req,res)=>{
    const shortid = req.params.shortId;
    //let get the response updated with count
    const result = await URL.findOne({shortid});
    return res.json({
        totalclicks:result.visitHistory.length,
        analytics:result.visitHistory
    })

}
module.exports = {
shorturl,
countanalytics
}