const GithubDataSource = require("../../../src/integrations/github/github.datasource");
const githubStorage = require("../../../src/integrations/github/github.storage");

beforeEach(() => {
  githubStorage.setSelectedRepository({
    id: 1
  });
  githubStorage.setAccessToken("accessToken");
});

test("should convert to metrics from repository data", () => {
  const githubDataSource = new GithubDataSource();
  const metrics = githubDataSource._toMetricsFromRepositoryData({
    stargazers_count: 1,
    subscribers_count: 1,
    forks_count: 1,
    open_issues_count: 1
  });

  expect(metrics).toBeTruthy();
  expect(Array.isArray(metrics)).toBe(true);
  expect(metrics.length).toBe(4);
  expect(metrics[0].key).toBe("github.stargazers_count");
  expect(metrics[0].value).toBe(1);
  expect(metrics[1].key).toBe("github.subscribers_count");
  expect(metrics[1].value).toBe(1);
  expect(metrics[2].key).toBe("github.forks_count");
  expect(metrics[2].value).toBe(1);
  expect(metrics[3].key).toBe("github.open_issues_count");
  expect(metrics[3].value).toBe(1);
});