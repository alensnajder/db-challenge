const axios = require("axios");
const githubConfig = require("./github.config");

const authorizationUri = "https://github.com/login/oauth/authorize";
const accessTokenUri = "https://github.com/login/oauth/access_token";

const githubAuth = {
  getAuthorizationUri: (clientId, port, scopes) => {
    return `${authorizationUri}?client_id=${clientId}&redirect_uri=http://localhost:${port}/github/oauth/authorization_callback&scope=${scopes}`;
  },
  getAccessToken: async (authorizationCode) => {
    let accessToken = null;

    const response = await axios.post(
      `${accessTokenUri}`,
      {
        client_id: githubConfig.clientId,
        client_secret: githubConfig.clientSecret,
        code: authorizationCode,
      },
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.data.access_token) {
      accessToken = response.data.access_token;
    }

    return accessToken;
  },
};

module.exports = githubAuth;
