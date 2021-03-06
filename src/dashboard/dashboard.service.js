const githubService = require("../integrations/github/github.service");
const githubStorage = require("../integrations/github/github.storage");
const githubAuth = require("../integrations/github/github.auth");
const appConfig = require("../config/app.config");
const githubConfig = require("../integrations/github/github.config");
const sendGridService = require("../integrations/sendgrid/sendgrid.service");
const sendGridStorage = require("../integrations/sendgrid/sendgrid.storage");

const dashboardService = {
  getDashboardData: async () => {
    const githubAuthorizationUri = githubAuth.getAuthorizationUri(
      githubConfig.clientId,
      appConfig.port,
      "repo"
    );

    let githubCurrentUser;
    let githubUserRepositories;
    let githubSelectedRepository;
    let sendGridCurrentUser;

    const githubAccessToken = githubStorage.getAccessToken();

    if (githubAccessToken) {
      githubCurrentUser = await githubService.getCurrentUser(
        githubStorage.getAccessToken()
      );
      githubUserRepositories = await githubService.getCurrentUserRepositories(
        githubStorage.getAccessToken()
      );
      githubSelectedRepository = githubStorage.getSelectedRepository();
    }

    const sendGridApiKey = sendGridStorage.getApiKey();

    if (sendGridApiKey) {
      sendGridCurrentUser = await sendGridService.getCurrentUser(
        sendGridStorage.getApiKey()
      );
    }

    return {
      githubAuthorizationUri: githubAuthorizationUri,
      githubCurrentUser: githubCurrentUser,
      githubUserRepositories: githubUserRepositories,
      githubSelectedRepository: githubSelectedRepository,
      sendGridCurrentUser: sendGridCurrentUser,
    };
  },
};

module.exports = dashboardService;
