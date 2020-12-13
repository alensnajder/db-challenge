let apiKey;

const sendGridStorage = {
  getApiKey: () => {
    return apiKey;
  },
  setApiKey: (value) => {
    apiKey = value;
  },
};

module.exports = sendGridStorage;
