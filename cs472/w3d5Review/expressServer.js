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

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set("views",path.join(__dirname,"myDir"))

app.get("/", function (req, res, next) {
    // res.send(" Hello ")
    // res.sendFile(path.join(__dirname,"index.html"));
    res.render("ejs2", { name1: "My Name" })
    // res.sendFile(path.join(__dirname, "myDir","index.html"));
})

app.get("/home", function (req, res, next) {
    // res.send(" Hello ")
    console.log(req.cookies);
    res.render(path.join(__dirname,"views","home"), { obj: req.cookies })
    // res.sendFile(path.join(__dirname,"views","home.html"))
})

app.post("/", function (req, res, next) {
    let values = req.body;
    console.log(values);
    res.cookie("myCookie", values);
    res.cookie("myCookie2", values.select);
    res.redirect("/home")
    // res.send(" Hello ")
})

app.post("/hello", function (req, res, next) {
    console.log(req.body);
    let obj = {};
    if(req.body.height>200)
        obj.color = "red";
   else 
        obj.color = "blue";
        res.send(obj);
    // res.send(" Hello ")
})

app.post("/resubmit", function (req, res, next) {
    let values = req.body;
    console.log(values);


    if (req.cookies.visitCount) {
        req.cookies.visitCount++;
        res.cookie("visitCount", req.cookies.visitCount++);
        let myCookie = req.cookies.myCookie;
        myCookie.a = req.cookies.visitCount++;
        res.cookie("myCookie", myCookie);
    } else
        res.cookie("visitCount", 1);

    
    res.cookie("myCookie2", values.select);
    res.redirect("/home")
    // res.send(" Hello ")
})
