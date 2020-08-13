const express = require("express");

const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (result) {
    res.render("index", {
      burger: data
    });
  });
});

router.post("/", function (req, res) {
  burger.insertOne(req.body.name, function (result) {
    console.log(result);
    res.redirect("/");
  });
});

router.put("/:id", function (req, res) {
  burger.updateOne(req.params.id, function (result) {
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;