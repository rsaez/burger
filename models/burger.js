// Import the ORM to insertOne functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {

    // console.log();
    // console.log("models > burger.js--------------------------------------");
    // console.log("cols");
    // console.log(cols);
    // console.log("vals");
    // console.log(vals);
    // console.log("cb");
    // console.log(cb);
    // console.log("********************************************************");
    // console.log();

    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
    // idk what to write
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger.js).
module.exports = burger;
