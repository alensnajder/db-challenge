const { TestScheduler } = require("jest");
const githubUtils = require("../../src/integrations/github/github.utils");

test("should get last page number from github link http header in response", () => {
  expect(
    githubUtils.getLastPageFromLinkHeader(
      '<https://api.github.com/repositories/892275/commits?per_page=1&page=2>; rel="next", <https://api.github.com/repositories/892275/commits?per_page=1&page=1863>; rel="last"'
    )
  ).toBe(1863);
});
