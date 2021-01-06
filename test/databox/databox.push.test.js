const {
  TestScheduler
} = require("jest");
const DataboxPush = require("../../src/databox/databox.push");
const Metric = require("../../src/integrations/metric");

test("should convert metrics to databox format", () => {
  const databoxPush = new DataboxPush();
  const databoxMetrics = databoxPush.toDataboxMetrics(
    [
      new Metric("key", "value"),
      new Metric("key", "value"),
      new Metric("key", "value")
    ]
  );

  expect(databoxMetrics).toBeTruthy();
  expect(Array.isArray(databoxMetrics)).toBe(true);
  expect(databoxMetrics.length).toBe(3);
  expect(databoxMetrics[0].key).toBe("key");
  expect(databoxMetrics[0].value).toBe("value");
});