const axios = require("axios");
const githubUtils = require("./github.utils");
const githubStorage = require("./github.storage");

class GithubService {
  constructor() {
    if (!githubStorage.getAccessToken()) {
      throw `Github access token not defined.`;
    }

    this._accessToken = githubStorage.getAccessToken();
  }

  async getCurrentUser() {
    let currentUser;

    try {
      const response = await axios.get("https://api.github.com/user", {
        headers: {
          Accept: "application/json",
          Authorization: `token ${this._accessToken}`,
        },
      });
      currentUser = response.data;
    } catch (error) {
      console.log(error);
    }

    return currentUser;
  }

  async getCurrentUserRepositories() {
    let userRepositories;

    try {
      const response = await axios.get("https://api.github.com/user/repos", {
        headers: {
          Accept: "application/json",
          Authorization: `token ${this._accessToken}`,
        },
      });
      userRepositories = response.data;
    } catch (error) {
      console.log(error);
    }

    return userRepositories;
  }

  async getRepositoryById(repositoryId) {
    let repository;

    try {
      const response = await axios.get(
        `https://api.github.com/repositories/${repositoryId}`, {
          headers: {
            Accept: "application/json",
            Authorization: `token ${this._accessToken}`,
          },
        }
      );
      repository = response.data;
    } catch (error) {
      console.log(error);
    }

    return repository;
  }

  async getRepositoryCommitsCount(repositoryId) {
    let commitsCount;

    try {
      const response = await axios.get(
        `https://api.github.com/repositories/${repositoryId}/commits?per_page=1`, {
          headers: {
            Accept: "application/json",
            Authorization: `token ${this._accessToken}`,
          },
        }
      );

      if (response.headers.link) {
        commitsCount = githubUtils.getLastPageFromLinkHeader(
          response.headers.link
        );
      }
    } catch (error) {
      console.log(error);
    }

    return commitsCount;
  }
}

module.exports = GithubService;