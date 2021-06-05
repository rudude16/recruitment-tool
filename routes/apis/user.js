var express = require("express");
var router = express.Router();
const User = require("../../models/user");
const auth = require("../../middleware/auth");
// POST
// Add the user in the database with emailId and password.
router.post("/", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const token = await user.generateAuth();
    //sgMail.sendWelcomeEmail(user.email, user.name);
    res.status(201).send({ user, token });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

//POST
//Login of the registered user with emailID and password.
router.post("/login", async (req, res) => {
  try {
    const user = await User.login(req.body.email, req.body.password);
    const token = await user.generateAuth();
    res.status(200).send({ user: user, token: token });
  } catch (e) {
    console.log(e);
    res.status(404).send(e);
  }
});

//POST
// log out the user from the app
router.post("/logout", auth, async (req, res) => {
  try {
    const user = req.user;
    user.tokens = user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await user.save();
    res.status(200).send();
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
