var express = require("express");
var ejs = require("ejs");
var app = express();
app.listen(80,function(){
    console.log(" Your server")
});
//Parsing Request params/body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EJS
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//Conditional Routing of all requests
// app.use(function(req,res,next){
//     console.log(req.query);
//     if(req.query.a==5)
//         next();
//     else
//         res.send(" Any non existing route");
// })

//EJS Send Parameters
app.get("/",function(req,res,next){
    console.log(" Hello ");
    res.render("ejsReview",{location:"fairfield", skill:[{name:"javascript",level:0},{name:"java",level:1}],position:"developer"});
});



