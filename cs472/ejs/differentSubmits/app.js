var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path");
var cookieParser = require('cookie-parser');

app.listen(80, function () {
    console.log(" Your server started listening")
})

//Read the parameters from post request
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

let fruits = [];

app.get("/", function (req, res, next) {
    if(!req.cookies.example2)
        res.cookie("example2",{a:1});
    console.log(req.cookies)

    res.render('index',{data:fruits,hideMe:'changeStyle'});
})
app.get("/req", function (req, res, next) {
    console.log(" GETT",req.query)
    res.send(" GETT")
})
app.get("/ajaxReq", function (req, res, next) {
    console.log(" ajaxReq",req.query);
    // setTimeout(function(){
        res.send({b:2,a:1})
    // },1000)
})


app.get("/basic", function (req, res, next) {
    res.sendFile(path.join(__dirname,'views','basic.html'))
})
app.post("/postReq", function (req, res, next) {
    console.log("  postReq",req.body)
    res.send(" postReq")
})
   


app.post("/", function (req, res, next) {
    console.log(req.cookies);
    let myExample = req.cookies.example2;
    myExample.a = req.body.fruit;
    
    res.cookie('example2',myExample);
    fruits.push(req.body.fruit);
    res.redirect('/')
})



