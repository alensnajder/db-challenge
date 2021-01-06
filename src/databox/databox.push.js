const databoxConfig = require("./databox.config");
const Databox = require("databox");
const metricsEventEmitter = require("../events/metrics.event");

class DataboxPush {

  listen() {
    metricsEventEmitter.on("metrics", (dataSourceName, metrics) => {
      this.push(dataSourceName, metrics);
    });
  }

  push(dataSourceName, metrics) {
    const dataBoxClient = new Databox({
      push_token: this.getPushTokenByDataSourceName(dataSourceName),
    });
    console.log(`Pushing ${dataSourceName} with metrics:`);
    console.log(metrics);
    dataBoxClient.insertAll(this.toDataboxMetrics(metrics));
  }

  toDataboxMetrics(metrics) {
    let databoxMetrics = [];

    metrics.forEach((item) => {
      databoxMetrics.push({
        key: item.key,
        value: item.value,
        date: item.date
      });
    });

    return databoxMetrics;
  }

  getPushTokenByDataSourceName(dataSourceName) {
    if (!databoxConfig.hasOwnProperty(dataSourceName)) {
      throw `${dataSourceName} databox push token does not exists in config.`;
    }

    return databoxConfig[dataSourceName];
  }
}

module.exports = DataboxPush;