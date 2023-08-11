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
    console.log(" HERERE ", req.cookies);
    let counter = parseInt(req.cookies.x) ? parseInt(req.cookies.x) + 1 : 1;
    console.log(counter)
    res.cookie('x', counter);
    res.send(" Cookie count " + counter)
})


app.get("/addItem", function (req, res, next) {
    res.send("<form action='/storeItem' method='post'> <input type='text' name='item'/><input type='submit' value='submit'/>");
})
app.post("/storeItem", function (req, res, next) {
    console.log(" HERERE ", req.cookies);
    let items = req.cookies.items;
    if (items)
        items.push(req.body.item);
    else
        items = [req.body.item];
    res.cookie('items', items);
    res.send(items);
})


app.get("/addObject", function (req, res, next) {
    res.send("<form action='/storeObject' method='post'> <input type='text' name='item'/><input type='text' name='itemValue'/><input type='submit' value='submit'/>");
})

app.post("/storeObject", function (req, res, next) {
    console.log(" HERERE ", req.cookies);
    let obj = req.cookies.myObj ? req.cookies.myObj : {};
    let previousValue = obj[req.body.item] ? obj[req.body.item] : "";
    obj[req.body.item] = previousValue + req.body.itemValue;
    
    res.cookie('myObj', obj);
    res.send(obj);
})
