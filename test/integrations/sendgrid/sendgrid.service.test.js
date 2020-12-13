const sendGridService = require("../../../src/integrations/sendgrid/sendgrid.service");
const axios = require("axios");

jest.mock("axios");

test("should return current user", async () => {
  const data = {
    address: null,
    address2: null,
    authy_id: null,
    city: "Maribor",
    company: "Alen Snajder",
    country: "SI",
    first_name: "Alen",
    last_name: "Snajder",
    multifactor_phone: null,
    phone: "+38631387562",
    state: "070",
    type: "user",
    userid: 19665802,
    website: "https://github.com/alensnajder",
    zip: null,
  };

  axios.get.mockResolvedValue({
    data: data,
  });

  const currentUser = await sendGridService.getCurrentUser();

  expect(currentUser).toEqual(data);
});

test("should return stats", async () => {
  const sendGridResponse = [
    {
      date: "2020-12-13",
      stats: [
        {
          metrics: {
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
          },
        },
      ],
    },
  ];

  const expectedData = {
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
  };

  axios.get.mockResolvedValue({
    data: sendGridResponse,
  });

  const stats = await sendGridService.getStats();

  expect(stats).toEqual(expectedData);
});
