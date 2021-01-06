const Metric = require("../../src/integrations/metric");
const MetricHolder = require("../../src/integrations/metricholder");

test("should return data source name and metrics", () => {
  const metrics = [new Metric("test key1", "test value1"), new Metric("test key2", "test value2")];
  const metricHolder = new MetricHolder("testName", metrics);

  expect(metricHolder).toBeTruthy();
  expect(metricHolder.dataSourceName).toBe("testName");
  expect(metricHolder.metrics).toBeTruthy();
  expect(metricHolder.metrics.length).toBe(2);
  expect(metricHolder.metrics[0].key).toBe("test key1");
  expect(metricHolder.metrics[0].value).toBe("test value1");
  expect(metricHolder.metrics[1].key).toBe("test key2");
  expect(metricHolder.metrics[1].value).toBe("test value2");
});