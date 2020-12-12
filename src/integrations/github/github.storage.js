let accessToken = null;
let selectedRepository = null;

const githubStorage = {
  getAccessToken: () => {
    console.log("Retrieving access token");
    return accessToken;
  },
  setAccessToken: (value) => {
    console.log("Set access token " + value);
    accessToken = value;
  },
  getSelectedRepository: () => {
    return selectedRepository;
  },
  setSelectedRepository: (repository) => {
    selectedRepository = repository;
  },
};

module.exports = githubStorage;
