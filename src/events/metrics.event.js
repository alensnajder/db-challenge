const {
  EventEmitter
} = require("events");

const metricsEventEmitter = new EventEmitter();

module.exports = metricsEventEmitter;