const SendGridDataSource = require("../../../src/integrations/sendgrid/sendgrid.datasource");
const sendGridStorage = require("../../../src/integrations/sendgrid/sendgrid.storage");

beforeEach(() => {
  sendGridStorage.setApiKey("apiKey");
});

test("should get metrics from sendgrid stats", () => {
  const sendGridDataSource = new SendGridDataSource();
  const metrics = sendGridDataSource._toMetricsFromSendGridStats({
    blocks: 0,
    bounce_drops: 0,
    bounces: 0,
    clicks: 0,
    deferred: 0,
    delivered: 0,
    invalid_emails: 0,
    opens: 0,
    processed: 0,
    requests: 0,
    spam_report_drops: 0,
    spam_reports: 0,
    unique_clicks: 0,
    unique_opens: 0,
    unsubscribe_drops: 0,
    unsubscribes: 0,
  });

  expect(metrics).toBeTruthy();
  expect(Array.isArray(metrics)).toBe(true);
  expect(metrics.length).toBe(16);
  expect(metrics[0].key).toBe("sendgrid.blocks");
  expect(metrics[0].value).toBe(0);
  expect(metrics[1].key).toBe("sendgrid.bounce_drops");
  expect(metrics[1].value).toBe(0);
  expect(metrics[2].key).toBe("sendgrid.bounces");
  expect(metrics[2].value).toBe(0);
  expect(metrics[3].key).toBe("sendgrid.clicks");
  expect(metrics[3].value).toBe(0);
  expect(metrics[4].key).toBe("sendgrid.deferred");
  expect(metrics[4].value).toBe(0);
  expect(metrics[5].key).toBe("sendgrid.delivered");
  expect(metrics[5].value).toBe(0);
  expect(metrics[6].key).toBe("sendgrid.invalid_emails");
  expect(metrics[6].value).toBe(0);
  expect(metrics[7].key).toBe("sendgrid.opens");
  expect(metrics[7].value).toBe(0);
  expect(metrics[8].key).toBe("sendgrid.processed");
  expect(metrics[8].value).toBe(0);
  expect(metrics[9].key).toBe("sendgrid.requests");
  expect(metrics[9].value).toBe(0);
  expect(metrics[10].key).toBe("sendgrid.spam_report_drops");
  expect(metrics[10].value).toBe(0);
  expect(metrics[11].key).toBe("sendgrid.spam_reports");
  expect(metrics[11].value).toBe(0);
  expect(metrics[12].key).toBe("sendgrid.unique_clicks");
  expect(metrics[12].value).toBe(0);
  expect(metrics[13].key).toBe("sendgrid.unique_opens");
  expect(metrics[13].value).toBe(0);
  expect(metrics[14].key).toBe("sendgrid.unsubscribe_drops");
  expect(metrics[14].value).toBe(0);
  expect(metrics[15].key).toBe("sendgrid.unsubscribes");
  expect(metrics[15].value).toBe(0);
});