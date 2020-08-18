var express = require("express");
var router = express.Router();
const User = require("../models/user");

// Update method
router.post("/:id", function(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (!user) {
      res.status(404).send("User is not found");
    } else {
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
    }
  });
});

module.exports = router;
