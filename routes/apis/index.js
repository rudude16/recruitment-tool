var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hi Welcome, To the Home Page!");
});

module.exports = router;
