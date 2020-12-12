const axios = require("axios");
const githubUtils = require("./github.utils");

const githubService = {
  getCurrentUser: async (accessToken) => {
    let currentUser = null;

    try {
      const response = await axios.get("https://api.github.com/user", {
        headers: {
          Accept: "application/json",
          Authorization: `token ${accessToken}`,
        },
      });
      currentUser = response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }

    return currentUser;
  },
  getCurrentUserRepositories: async (accessToken) => {
    let userRepositories = null;

    try {
      const response = await axios.get("https://api.github.com/user/repos", {
        headers: {
          Accept: "application/json",
          Authorization: `token ${accessToken}`,
        },
      });
      userRepositories = response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }

    return userRepositories;
  },
  getRepositoryById: async (accessToken, repositoryId) => {
    let repository = null;

    try {
      const response = await axios.get(
        `https://api.github.com/repositories/${repositoryId}`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `token ${accessToken}`,
          },
        }
      );
      repository = response.data;
    } catch (error) {
      console.log(error.response.data.message);
    }

    return repository;
  },
  getRepositoryCommitsCount: async (accessToken, repositoryId) => {
    let commitsCount = null;

    try {
      const response = await axios.get(
        `https://api.github.com/repositories/${repositoryId}/commits?per_page=1`,
        {
          headers: {
            Accept: "application/json",
            Authorization: `token ${accessToken}`,
          },
        }
      );

      if (response.headers.link) {
        commitsCount = githubUtils.getLastPageFromLinkHeader(
          response.headers.link
        );
      }
    } catch (error) {
      console.log(error.response.data.message);
    }

    return commitsCount;
  },
};

module.exports = githubService;
