var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.all("burgers", function (result) {
      cb(result);
    });
  },
  insertOne: function (name, cb) {
    orm.create("burgers", function (result) {
      cb(result);
    });
  },
  updateOne: function (id, cb) {
    orm.update("burgers", function (result) {
      cb(result);
    });
  }
};

module.exports = burger;