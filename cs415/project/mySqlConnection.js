//Run the below statements
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';
//FLUSH PRIVILEGES;
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
