const orm = require("../config/orm.js");

const burger = {
  selectAll: function (cb) {
    orm.all("burgers", function (result) {
      cb(result);
    });
  },
  insertOne: function (cols, name, cb) {
    orm.create("burgers", cols, name, function (result) {
      cb(result);
    });
  },
  updateOne: function (cols, id, cb) {
    orm.update("burgers", cols, id, function (result) {
      cb(result);
    });
  }
};

module.exports = burger;