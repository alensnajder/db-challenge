const githubStorage = require("../../../src/integrations/github/github.storage");

beforeEach(() => {
  githubStorage.setAccessToken(null);
  githubStorage.setSelectedRepository(null);
});

test("should return null if access token not set", () => {
  expect(githubStorage.getAccessToken()).toBe(null);
});

test("should return access token if has been set", () => {
  const testToken = "6J7yp0QoO5";
  githubStorage.setAccessToken(testToken);

  expect(githubStorage.getAccessToken()).toBe(testToken);
});

test("should return null if selected repository not set", () => {
  expect(githubStorage.getSelectedRepository()).toBe(null);
});

test("should return selected repository if has been set", () => {
  const repository = {
    name: "Test repository",
  };
  githubStorage.setSelectedRepository(repository);

  expect(githubStorage.getSelectedRepository()).toBeDefined();
  expect(githubStorage.getSelectedRepository()).toHaveProperty(
    "name",
    "Test repository"
  );
});
