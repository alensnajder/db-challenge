const cron = require("node-cron");
const metricsEventEmitter = require("../events/metrics.event");

let cronJobs = new Map();

class Schedule {

  addJob(name, cronTime, dataSource) {
    cronJobs.set(name, cron.schedule(cronTime, async () => {
      const data = await dataSource.getMetrics();
      metricsEventEmitter.emit("metrics", data.dataSourceName, data.metrics);
    }, {
      scheduled: false,
    }));
  }

  getJob(name) {
    return cronJobs.get(name);
  }

  removeJob(name) {
    if (cronJobs.has(name)) {
      this.stopJob(name);
      cronJobs.delete(name);
    }
  }

  startJob(name) {
    if (cronJobs.has(name)) {
      let cronJob = cronJobs.get(name);
      cronJob.start();
    }
  }

  stopJob(name) {
    if (cronJobs.has(name)) {
      let cronJob = cronJobs.get(name);
      cronJob.stop();
    }
  }

  removeAll() {
    cronJobs.clear();
  }
}

module.exports = Schedule;