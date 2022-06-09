const express = require('express');
const app = express();
const cookieParse = require("cookie-parser");
var path = require("path");
var ejs = require("ejs");

app.listen(80, () => {
    console.log('Your Server is running on 3000');
})
//Read the parameters from post request
app.use(cookieParse());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
// app.set('views', path.join(__dirname,"myDir"));

app.get("/ajax",function(req,res,next){
    res.render("ajaxReq");
})

//Get Ajax Request
app.get("/hello",function(req,res,next){
    console.log(" Here ajax",req.body,req.query);
    res.send({a:1});
})

//Post Ajax Request
app.post("/hello",function(req,res,next){
    console.log(" Here ajax",req.body);
    console.log(" REquest params query ",req.query);
    res.send([1,2,3]);
})
