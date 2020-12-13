const githubAuth = require("../../../src/integrations/github/github.auth");
const axios = require("axios");

jest.mock("axios");

test("should return authorization uri", () => {
  const testClientId = "YEySHRbGsE";
  const testPort = 3000;
  const testScopes = "repo";
  expect(
    githubAuth.getAuthorizationUri(testClientId, testPort, testScopes)
  ).toBe(
    `https://github.com/login/oauth/authorize?client_id=${testClientId}&redirect_uri=http://localhost:${testPort}/github/oauth/authorization_callback&scope=${testScopes}`
  );
});

test("should return access token", async () => {
  axios.post.mockResolvedValue({
    data: {
      access_token: "e72e16c7e42f292c6912e7710c838347ae178b4a",
      token_type: "bearer",
    },
  });

  const accessToken = await githubAuth.getAccessToken("authorizationCode");
  expect(accessToken).toEqual("e72e16c7e42f292c6912e7710c838347ae178b4a");
});
