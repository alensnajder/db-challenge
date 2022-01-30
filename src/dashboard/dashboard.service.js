const githubStorage = require("../integrations/github/github.storage");
const githubAuth = require("../integrations/github/github.auth");
const appConfig = require("../config/app.config");
const githubConfig = require("../integrations/github/github.config");
const sendGridStorage = require("../integrations/sendgrid/sendgrid.storage");
const GithubService = require("../integrations/github/github.service");
const SendGridService = require("../integrations/sendgrid/sendgrid.service");

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

    try {
      const githubService = new GithubService();
      if (githubAccessToken) {
        githubCurrentUser = await githubService.getCurrentUser();
        githubUserRepositories = await githubService.getCurrentUserRepositories();
        githubSelectedRepository = githubStorage.getSelectedRepository();
      }
    } catch (error) {
      console.log(error);
    }

    try {
      const sendGridApiKey = sendGridStorage.getApiKey();
      const sendGridService = new SendGridService();

      if (sendGridApiKey) {
        sendGridCurrentUser = await sendGridService.getCurrentUser(
          sendGridStorage.getApiKey()
        );
      }
    } catch (error) {
      console.log(error);
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