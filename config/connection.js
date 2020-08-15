var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "ENTER PASSWORD HERE!",
  database: "burgers_db"
});
connection.connect(function (err) {
  // console.log("THING");

  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// console.log("LOADED");

module.exports = connection;