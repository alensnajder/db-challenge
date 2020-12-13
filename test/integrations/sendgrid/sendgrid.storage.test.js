const sendGridStorage = require("../../../src/integrations/sendgrid/sendgrid.storage");

beforeEach(() => {
  sendGridStorage.setApiKey(null);
});

test("should return null if api key not set", () => {
  expect(sendGridStorage.getApiKey()).toBe(null);
});

test("should return api key if has been set", () => {
  sendGridStorage.setApiKey("JgSjFkc7rc");
  expect(sendGridStorage.getApiKey()).toBe("JgSjFkc7rc");
});
