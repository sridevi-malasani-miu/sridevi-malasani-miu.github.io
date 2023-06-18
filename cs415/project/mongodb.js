var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

function insertDocument(myDb, col, data) {
  MongoClient.connect(url, function (err, db) {
    var dbo = db.db(myDb);
    dbo.collection(col).insertOne(data, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });
}
insertDocument("myDatabase","customers",{ name: "Company Inc", address: "Highway 37" });
var mongo = {};
mongo.getCustomers = async function(query){
  var db = await MongoClient.connect(url);
  var dbo = db.db("myDatabase");
  var result = await dbo.collection("customers").findOne(query);
  console.log("herere",result)
  return result;
}

module.exports = mongo;
