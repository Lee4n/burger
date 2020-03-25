var mysql = require("mysql");

var connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.USER_DB,
  password: process.env.USER_PASS,
  database: "burgers_db"
});


connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
