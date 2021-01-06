const Metric = require("./metric");
const MetricHolder = require("./metricholder");

class DataSource {
  constructor(dataSource) {
    if (!(typeof dataSource.getMetrics === 'function')) {
      throw `${this._dataSource.constructor.name} does not contain an implementation of getMetrics() method.`;
    }

    this._dataSource = dataSource;
  }

  get dataSource() {
    return this._dataSource;
  }

  async getMetrics() {
    const data = await this._dataSource.getMetrics();

    if (!(data instanceof MetricHolder)) {
      throw `${this._dataSource.constructor.name} getMetrics return type is not MetricHolder`;
    }

    if (!(data.metrics instanceof Array)) {
      throw `${this._dataSource.constructor.name} metrics should consist array of Metrics.`;
    }

    data.metrics.forEach((item) => {
      if (!(item instanceof Metric)) {
        throw `At least one item returned from ${this._dataSource.constructor.name} is not a Metric object.`;
      }
    });

    return data;
  }
}

module.exports = DataSource;