const express = require("express");
const router = express.Router();
const sendGridStorage = require("./sendgrid.storage");
const SendGridService = require("./sendgrid.service");
const DataSource = require("../datasource");
const SendGridDataSource = require("./sendgrid.datasource");
const Schedule = require("../../schedule/schedule");

const schedule = new Schedule();

router.post("/", async (req, res) => {
  if (req.body.sendGridApiKey) {
    sendGridStorage.setApiKey(req.body.sendGridApiKey);
    const sendGridService = new SendGridService();
    const currentUser = await sendGridService.getCurrentUser(
      sendGridStorage.getApiKey()
    );

    if (currentUser) {
      schedule.addJob("sendgrid", "* * * * *", new DataSource(new SendGridDataSource()));
      schedule.startJob("sendgrid");
    }
  }
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  sendGridStorage.setApiKey(null);
  schedule.removeJob("sendgrid");
  res.redirect("/");
});

module.exports = router;