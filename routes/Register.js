var express = require("express");
var router = express.Router();
const User = require("../models/user");

//Add method
router.post("/", function(req, res) {
  let user = new User();
  user.name = req.body.name;
  user.year = req.body.year;
  user.V_NV = req.body.V_NV;

  user.save(function(err) {
    if (err) {
      console.log(err);
      res.json({ msg: "failed" });
    } else {
      res.json({ msg: "success" });
    }
  });
});

module.exports = router;
