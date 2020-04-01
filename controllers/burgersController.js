var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
  //FIXME:
  burger.all(function (data) {
    res.render("index", {
      burger_data: data
    });
  })
});

// post route -> back to index
router.post("/api/burgers", function (req, res) {
  burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {
    res.json(result)
    res.redirect("/burgers")
  })
});

// put route -> back to index


module.exports = router;