var express = require("express");
var app = express();
var ejs = require("ejs");
var path = require("path");
var cookieParser = require("cookie-parser");

app.listen(80, function () {
    console.log(" Your server started listening")
})

//Read the parameters from post request
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res, next) {
    //set cookie
    // res.cookie("x",{a:1});
    res.cookie('x', 1);
    // res.cookie('x',['apple','banana'])
    res.cookie("y", 2);
    res.send(" TEST <form method='post' action='/'> <input type='submit'/></form>");

})

app.post("/", function (req, res, next) {
    //set cookie
    console.log(req.cookies);
    let x = req.cookies.x;

    // req.cookies.x.push("pear")
    //req.cookies.x.a = 3;

    let a = req.cookies.x + 1;
    console.log(a);

    res.cookie('x', a)
    res.send("Data");

})




