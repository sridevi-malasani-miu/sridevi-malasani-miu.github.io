//Run the below statements in mysql workbench
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
//FLUSH PRIVILEGES;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

var sql = {};
sql.selectQuery = function(query,callback){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(query, callback);
  });
}

module.exports = sql;
