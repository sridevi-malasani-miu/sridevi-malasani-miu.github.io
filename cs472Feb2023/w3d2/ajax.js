var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path");
var cookieParser = require("cookie-parser");

app.listen(80, function () {
    console.log(" Your server started listening")
})

//Read the parameters from post request
app.use(cookieParser("salt for cookie"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.get("/form", function (req, res, next) {
    res.render('index',{data:req.cookies.myValue});
})

app.post("/save", function (req, res, next) {
   let submittedValue = req.body.textField;
   res.cookie('myValue',submittedValue);
   res.redirect('/form');
})

//Toggle color by reading from cookie
app.get('/ajaxToggleColor',function(req,res){
    // let color = req.cookies.color?req.cookies.color:'green';
    // if(req.cookies.color){
    //     color = (req.cookies.color=='green')?'red':'green';
    // }
    console.log(req.query);
    let color;
    if(req.cookies.color){
        color = (req.cookies.color=='green')?'red':'green';
    }else{
        color = 'green';
    }
    res.cookie('color',color)
    res.send({color:color})
})
//Read the data sent by the ajax request
app.get('/ajaxReadData',function(req,res){
    console.log(" Print data",req.query)
    res.send({color:'blue'})
})
//Ajax call resulting in Error
app.get('/ajaxError',function(req,res){
    throw new Error("Ajax error")
})
// Parameterized request
app.get('/ajax/:id/:name',function(req,res){
    console.log(" ajax:id",req.params)
    res.send({color:'pink'})
})
