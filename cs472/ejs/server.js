var express = require('express');
var ejs = require('ejs');
var app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(80, function () {
console.log(" Server Listening")
})
let flowers = [];

app.get('/', function (req, res, next) {
    res.render('index',
        { flowers: flowers })
})

app.post('/post', function (req, res, next) {
   flowers.push(req.body.flower);
   res.redirect('back');
})
