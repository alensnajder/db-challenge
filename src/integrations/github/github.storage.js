let accessToken;
let selectedRepository;

const githubStorage = {
  getAccessToken: () => {
    return accessToken;
  },
  setAccessToken: (value) => {
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
