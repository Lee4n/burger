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

router.post("/burgers/create", function (req, res) {
  var newBurger = req.body.burger_name
  burger.create(newBurger, function (data) {
    res.redirect("/")
  })
})


// put route -> back to index
router.put("/api/burgers/:id", function(req, res) {
  var id = req.params.id
  burger.update(id, function (data) {
    res.sendStatus(200)
  });
});

module.exports = router;