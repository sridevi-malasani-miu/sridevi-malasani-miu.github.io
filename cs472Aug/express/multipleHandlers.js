const express = require('express');
const { userInfo } = require('os');
const app = express();
var path = require("path")

app.listen(81, () => {
    console.log('Your Server is running on 80');
})
//Read the parameters from post request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.all("/api/*",function(req,res,next){
    console.log("req * ")
})
// app.use((req, res, next) => {
//     console.log(" Here in Use");
//     // res.sendFile(path.join(__dirname, "../", "html", "error.html"))
// });
app.use("/admin",function (req, res, next) {
    console.log(" Use 1",req.query);
    next();
})
app.use("/admin",function (req, res, next) {
    console.log(" Use 2 ",req.query);
    next();
    // res.sendFile(path.join(__dirname,"./index.html"));
})

app.get("/admin", function (req, res, next) {
    console.log(" Get 1",req.params);
    // req.url='/view'
    next();
    // next('route');
    // res.sendFile("./index.html")
})
app.get("/admin", function (req, res, next) {
    console.log(" Get 2 ",req.params);
    next();
    // res.sendFile("./index.html")
})

// app.get("/cars/add", function (req, res, next) {
//     res.send("Cars Add ");
// })

app.get("/admin", function (req, res, next) {
    console.log('Admin Landing');
    res.send('<form action="/postData" method="post">Name<input name="aa"/> Skill<input name="bb"/><input type="submit" value="submit"/></form>');
});
let body;
let myFn = function (req,res,next){
    console.log(" Here myFn");
    req.body.myArg = 1;
    // if(userInfo.)
    next();
}
let myFn1 = function (req,res,next){
    console.log(" MYFN1");
    let b = {a:1}
    req.body.myArg = 1;
    next();
}
app.post("/postData",myFn,  function (req, res, next) {
    console.log('In the post',req.body.myArg);
    
    body = req.body;
    next();
    // res.redirect('/view')
});
app.use('/postData',function(req,res,next){
    console.log(" Here use ",req.body);
    // next();
    res.redirect('/view')
})

app.get("/view", function (req, res, next) {
    console.log('In the view',req.body);
    res.send(" My View")
});

app.get("/admin/view", function (req, res, next) {
    console.log('In the view',req.body);
    res.send(" My View")
});

