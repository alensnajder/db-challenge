const Metric = require("../../src/integrations/metric");
const MetricHolder = require("../../src/integrations/metricholder");

test("should return data source name and metrics", () => {
  const metric = new Metric("key", "value");

  expect(metric).toBeTruthy();
  expect(metric.key).toBe("key");
  expect(metric.value).toBe("value");
});