var express = require("express");
var router = express.Router();
const User = require("../models/user");

// Get all method
router.get("/", function(req, res) {
  let users = User.find({}, function(err, users) {
    if (err) {
      console.log(err);
      res.json({ msg: "failed" });
    } else {
      res.json(users);
    }
  });
});

router.get("/Check/:id", function(req, res) {
  User.findById(req.params.id, function(err, user) {
    res.json(user);
  });
});

module.exports = router;
