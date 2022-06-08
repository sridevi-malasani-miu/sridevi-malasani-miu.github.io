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



app.get("/admin", function (req, res, next) {
    console.log(" In Landing ",req.cookies)
    console.log('Admin Landing',req.query);
    res.send("<form action='/admin' method='post'><input name='myName'/><input name='cookieValue'/><input type='submit'/>")
});

//Read Cookies
app.get("/myFile", function (req, res, next) {
    console.log(req.cookies)
});

//Set Cookies
app.post("/admin", function (req, res, next) {
    console.log("Cookie Value", req.body.cookieValue);
    if(req.body.cookieValue==1)
        res.cookie("myKey", 1);
    res.redirect("myFile");
});

