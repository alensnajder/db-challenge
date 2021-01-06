const DataSource = require("../../src/integrations/datasource");
const Metric = require("../../src/integrations/metric");
const MetricHolder = require("../../src/integrations/metricholder");

test("should throw exception if getMetrics function does not exists.", () => {
  const dataSourceInitialization = () => {
    new DataSource("Initialization with datasource without getMetrics method");
  };

  expect(dataSourceInitialization).toThrow();
});

test("should initialize if datasource with getMetrics is provided.", () => {
  let CustomDataSource = function () {}
  CustomDataSource.prototype.getMetrics = function () {};

  const dataSourceInitialization = () => {
    new DataSource(new CustomDataSource());
  };

  expect(dataSourceInitialization).not.toThrow();
});

test("should return datasource", () => {
  let CustomDataSource = function () {}
  CustomDataSource.prototype.getMetrics = function () {};

  const dataSource = new DataSource(new CustomDataSource());

  expect(dataSource.dataSource).toBeTruthy();
  expect(dataSource.dataSource.constructor.name).toBe("CustomDataSource");
});

test("should return metrics", async () => {
  let CustomDataSource = function () {}
  CustomDataSource.prototype.getMetrics = function () {
    return new MetricHolder("test data source", [new Metric("key1", "value1")]);
  }

  const dataSource = new DataSource(new CustomDataSource());
  const data = await dataSource.getMetrics();

  expect(data).toBeTruthy();
  expect(data.dataSourceName).toBe("test data source");
  expect(data.metrics).toBeTruthy();
  expect(data.metrics.length).toBe(1);
});