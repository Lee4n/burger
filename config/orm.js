// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob) {
  // column1=value, column2=value2,...
  var arr = [];

  for (var key in ob) {
    arr.push(key + "=" + ob[key]);
  }

  return arr.toString();
}

var orm = {
  all: function (tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function (table, cols, vals, cb) {

    connection.query("insert into ?? (??, ??) values(?, ?)", [table, cols[0], cols[1], vals[0], vals[1]], function (err, data) {
      cb(data)
    })
  },
  // An example of objColVals would be {name: panther, sleepy: true}
  update: function (table, cols, vals, cb) {
    connection.query("update ?? set ?? = ? where ?? = ?", [table, cols[0], vals[0], cols[1], vals[1]], function (error, data) {
      cb(data)
    })
  }
};

module.exports = orm;