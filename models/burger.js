var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      orm.all("burgers", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    update: function(id, cb) {
      orm.update("burgers", ["devoured", "id"], [true, id], function(res) {
        cb(res);
      });
    },
    create: function(newBurger, cb) {
      orm.create("burgers", ["burger_name", "devoured"], [newBurger, false], function(res) {
        cb(res);
      });
    },
  };

module.exports = burger;
