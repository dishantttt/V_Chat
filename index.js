// Libraries
var express = require("express"),
    app     = express();


// Initial Routes

app.get("/",function(req,res){
    res.send("Website is working");
})
