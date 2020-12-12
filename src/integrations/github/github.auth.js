const axios = require("axios");
const appConfig = require("../../config/app.config");
const githubConfig = require("./github.config");

const scopes = "repo";
const authorizationUri = "https://github.com/login/oauth/authorize";
const accessTokenUri = "https://github.com/login/oauth/access_token";

const githubAuth = {
  getAuthorizationUri: () => {
    return `${authorizationUri}?client_id=${githubConfig.clientId}&redirect_uri=http://localhost:${appConfig.port}/github/oauth/authorization_callback&scope=${scopes}`;
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
