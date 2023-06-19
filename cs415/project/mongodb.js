var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var mongo = {};
mongo.getCustomers = async function(query){
  var db = await MongoClient.connect(url);
  var dbo = db.db("myDatabase");
  var result = await dbo.collection("customers").find(query).toArray();
  console.log("herere",result)
  return result;
}

mongo.saveCustomer = async function(data){
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db("myDatabase");
    dbo.collection("customers").insertOne(data, function (err, res) {
      if (err) throw err;
      console.log("document inserted",data);
      db.close();
    });
  });
}

// mongo.saveCustomer({id:1,name:'ram'})
mongo.getCustomers({})
module.exports = mongo;
