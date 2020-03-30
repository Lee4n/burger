var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
  //FIXME:
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
});

// post route -> back to index
router.post("/burgers", function(req, res) {
  burger.createOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    res.json(result)
    res.redirect("/burgers")
  })
});

// put route -> back to index


module.exports = router;
