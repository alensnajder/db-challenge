const express = require("express");
const router = express.Router();
const sendGridStorage = require("./sendgrid.storage");
const sendGridPush = require("./sendgrid.push");
const sendGridService = require("./sendgrid.service");

router.post("/", async (req, res) => {
  if (req.body.sendGridApiKey) {
    sendGridStorage.setApiKey(req.body.sendGridApiKey);
    const currentUser = await sendGridService.getCurrentUser(
      sendGridStorage.getApiKey()
    );
    if (currentUser) {
      sendGridPush.start();
    }
  }
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  sendGridStorage.setApiKey(null);
  sendGridPush.stop();
  res.redirect("/");
});

module.exports = router;
