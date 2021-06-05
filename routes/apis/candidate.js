const codingPlatforms = require("./CodingAPI");
const Candidate = require("../../models/candidate");
var express = require("express");
var router = express.Router();

/* GET Rating of candidate on various coding platform. */
router.get("/coding/:platform/:userName", async (req, res) => {
  const info = await codingPlatforms(req.params.platform, req.params.userName);
  res.json(info.data);
});

module.exports = router;
