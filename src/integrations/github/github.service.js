const config = require("./github.config");
const axios = require("axios");

const scopes = "repo";
const authorizationUri = "https://github.com/login/oauth/authorize";
const accessTokenUri = "https://github.com/login/oauth/access_token";

let accessToken = "";

const githubService = {
  getAuthorizationUri: () => {
    return `${authorizationUri}?client_id=${config.clientId}&redirect_uri=http://localhost:3000/oauth/github/authorization_callback&scope=${scopes}`;
  },
  getAccessToken: (authorizationCode) => {
    axios
      .post(
        `${accessTokenUri}`,
        {
          client_id: config.clientId,
          client_secret: config.clientSecret,
          code: authorizationCode,
        },
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        accessToken = response.data.access_token;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

module.exports = githubService;
