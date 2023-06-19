var express = require('express');
var app = express();
var sql = require('./mySqlConnection');
var mongo = require('./mongodb');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/mongo/save', function (req, res) {
   res.sendFile( __dirname + "/public/" + "index.html" );
});

app.get('/mongo/sqlUser', function (req, res) {
   res.sendFile( __dirname + "/public/" + "user.html" );
});

 app.get('/mongo/customers', async (req,res)=>{
   var customers = await mongo.getCustomers({});
   res.end(JSON.stringify(customers,null,'\t'));
 })

app.post('/mongo/save', function (req, res) {
   // Prepare output in JSON format
   let response = {
      first_name:req.body.first_name,
      last_name:req.body.last_name,
   };
   mongo.saveCustomer(response);
   res.redirect("/mongo/customers");
});


app.get('sql/users',function(req,res){
   sql.selectQuery("select * from amazon.Category",function(err,out){
      console.log(out);
      res.end(JSON.stringify(out,null,'\t'));
   });
 })

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
