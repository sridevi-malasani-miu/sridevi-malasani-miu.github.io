var express = require('express');
var app = express();
var sql = require('./mySqlConnection');
var mongo = require('./mongodb');

app.use(express.static('public'));
app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "dfdf.html" );
})

app.get('/myFile', function (req, res) {
    res.sendFile( __dirname + "//public/" + "dfdfddfinventory.html" );
 });

 app.get('sql/users',function(req,res){
   sql.selectQuery("select * from amazon.Category",function(err,out){
      console.log(out);
      res.end(JSON.stringify(out,null,'\t'));
   });
 })

 app.get('/mongodb/customers', async (req,res)=>{
   var customers = await mongo.getCustomers({});
   console.log(customers);
   res.end(JSON.stringify(customers,null,'\t'));
 })

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name,
      first_name1:req.query.first_name,
      last_name1:req.query.last_name,
      first_name2:req.query.first_name,
      last_name2:req.query.last_name,
      first_name3:req.query.first_name,
      last_name3:req.query.last_name,
      first_name3:req.query.first_name,
      last_name5:{hello:'hi'},
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response,null,'\t'));
});

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})
