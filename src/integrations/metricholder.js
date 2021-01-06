class MetricHolder {
  constructor(dataSourceName, metrics) {
    this._dataSourceName = dataSourceName;
    this._metrics = metrics;
  }

  get dataSourceName() {
    return this._dataSourceName;
  }

  get metrics() {
    return this._metrics;
  }
}

module.exports = MetricHolder;