const sendGridUtils = require("../../../src/integrations/sendgrid/sendgrid.utils");

test("should format date to sendgrid format", () => {
  const date = new Date("2020-12-13T00:20:44.419Z");
  expect(sendGridUtils.formatDateForSendGrid(date)).toBe("2020-12-13");
});
