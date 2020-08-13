var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll(function (result) {
      cb(result);
    });
  },
  insertOne: function (name, cb) {
    orm.insertOne(burger, function (result) {
      cb(result);
    });
  },
  updateOne: function (id, cb) {
    orm.update(burger, function (result) {
      cb(result);
    });
  }
};

module.exports = burger;