const cron = require("node-cron");
const Databox = require("databox");
const sendGridService = require("./sendgrid.service");
const sendGridUtils = require("./sendgrid.utils");
const sendGridStorage = require("./sendgrid.storage");

const dataBoxClient = new Databox({
  push_token: process.env.DATABOX_SENDGRID_KEY,
});

const task = cron.schedule(
  "* * * * *",
  async () => {
    const sendGridMetrics = await sendGridService.getStats(
      sendGridStorage.getApiKey(),
      sendGridUtils.formatDateForSendGrid(new Date())
    );
    const currentDate = new Date().toISOString();

    if (sendGridMetrics) {
      dataBoxClient.insertAll([
        {
          key: "sendgrid.blocks",
          value: sendGridMetrics.blocks,
          date: currentDate,
        },
        {
          key: "sendgrid.bounce_drops",
          value: sendGridMetrics.bounce_drops,
          date: currentDate,
        },
        {
          key: "sendgrid.bounces",
          value: sendGridMetrics.bounces,
          date: currentDate,
        },
        {
          key: "sendgrid.clicks",
          value: sendGridMetrics.clicks,
          date: currentDate,
        },
        {
          key: "sendgrid.deferred",
          value: sendGridMetrics.deferred,
          date: currentDate,
        },
        {
          key: "sendgrid.delivered",
          value: sendGridMetrics.delivered,
          date: currentDate,
        },
        {
          key: "sendgrid.invalid_emails",
          value: sendGridMetrics.invalid_emails,
          date: currentDate,
        },
        {
          key: "sendgrid.opens",
          value: sendGridMetrics.opens,
          date: currentDate,
        },
        {
          key: "sendgrid.processed",
          value: sendGridMetrics.processed,
          date: currentDate,
        },
        {
          key: "sendgrid.requests",
          value: sendGridMetrics.requests,
          date: currentDate,
        },
        {
          key: "sendgrid.spam_report_drops",
          value: sendGridMetrics.spam_report_drops,
          date: currentDate,
        },
        {
          key: "sendgrid.spam_reports",
          value: sendGridMetrics.spam_reports,
          date: currentDate,
        },
        {
          key: "sendgrid.unique_clicks",
          value: sendGridMetrics.unique_clicks,
          date: currentDate,
        },
        {
          key: "sendgrid.unique_opens",
          value: sendGridMetrics.unique_opens,
          date: currentDate,
        },
        {
          key: "sendgrid.unsubscribe_drops",
          value: sendGridMetrics.unsubscribe_drops,
          date: currentDate,
        },
        {
          key: "sendgrid.unsubscribes",
          value: sendGridMetrics.unsubscribes,
          date: currentDate,
        },
      ]);
      console.log("SendGrid data pushed to Databox.");
    }
  },
  {
    scheduled: false,
  }
);

const sendGridPush = {
  start: () => {
    task.start();
  },
  stop: () => {
    task.stop();
  },
};

module.exports = sendGridPush;
