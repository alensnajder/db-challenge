const MetricHolder = require("../metricholder");
const Metric = require("../metric");
const SendGridService = require("./sendgrid.service");
const sendGridService = require("./sendgrid.service");
const sendGridStorage = require("./sendgrid.storage");
const sendGridUtils = require("./sendgrid.utils");

class SendGridDataSource {
  async getMetrics() {
    const sendGridService = new SendGridService();
    const sendGridStats = await sendGridService.getStats(sendGridUtils.formatDateForSendGrid(new Date()));

    let metrics = this._toMetricsFromSendGridStats(sendGridStats);

    return new MetricHolder("sendgrid", metrics);
  }

  _toMetricsFromSendGridStats(stats) {
    let metrics = [];

    Object.keys(stats).forEach((key) => {
      metrics.push(new Metric(`sendgrid.${key}`, stats[key]));
    });

    return metrics;
  }
}

module.exports = SendGridDataSource;