const codingPlatforms = require("./CodingAPI");
const githubAPI = require("./githubAPI");
const flatted = require("flatted");

var express = require("express");
const { URITooLong } = require("http-errors");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const sendInfo = async () => {
    const info = await codingPlatforms("codeforces", "rudude");
    res.json(info.data);
  };
  sendInfo();
});

module.exports = router;
