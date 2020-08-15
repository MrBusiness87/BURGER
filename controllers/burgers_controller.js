const express = require("express");

const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (result) {
    console.log(result);
    res.render("index", {
      burger: result
    });
  });
});
// console.log("THING");
router.post("/", function (req, res) {
  burger.insertOne(["name"], [req.body.name], function (result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/:id", function (req, res) {
  burger.updateOne({
    devoured: req.body.devoured
  }, [req.params.id], function (result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;


// {
//   highest_bid: answer.bid
// },
// {
//   id: chosenItem.id
// }