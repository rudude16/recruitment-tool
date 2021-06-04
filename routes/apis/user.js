var express = require("express");
var router = express.Router();

// POST
// Add the user in the database with emailid and password.
router.post("/api/user", async (req, res) => {
  const user = new user(req.body);
  try {
    await user.save();
    const token = await user.generateAuth();
    sgMail.sendWelcomeEmail(user.email, user.name);
    res.status(201).send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

module.exports = router;
