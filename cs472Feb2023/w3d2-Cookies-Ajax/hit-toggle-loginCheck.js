const express = require('express');
const app = express();
var path = require("path");
var ejs = require("ejs");
var cookieParser = require("cookie-parser");


app.listen(80, () => {
    console.log('Your Server is running on 3000');
})

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS Engine
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//Page Hit Count
app.get("/hitCount", function (req, res, next) {
    let hitCount = 1;
    if (!req.cookies.hitCount)
        res.cookie('hitCount', hitCount)
    else {
        hitCount = parseInt(req.cookies.hitCount) + 1;
        res.cookie('hitCount', hitCount);
    }
    res.send(" Page Hit Count " + hitCount);
});

//Refresh page to see the result
app.get("/toggleValue", function (req, res, next) {
    let color = 'green'
    if (!req.cookies.color)
        res.cookie('color', 'green')
    else {
        color = req.cookies.color == 'green' ? 'red' : 'green'
        res.cookie('color', color);
    }
    res.send(" Color " + color);
});
let validLogins = ['ram', 'syam', 'venu'];

//Login
app.get("/login", function (req, res, next) {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

app.post("/login", function (req, res, next) {
   res.cookie('login',req.body.login);
   res.redirect('/content')
});
app.get("/content", function (req, res, next) {
    if (req.cookies.login)
        res.sendFile(path.join(__dirname, 'views', 'content.html'));
    else
        res.redirect('/login')
});

