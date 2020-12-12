const githubService = require("../integrations/github/github.service");
const githubStorage = require("../integrations/github/github.storage");
const githubAuth = require("../integrations/github/github.auth");

const dashboardService = {
  getDashboardData: async () => {
    const githubAuthorizationUri = githubAuth.getAuthorizationUri();
    const githubCurrentUser = await githubService.getCurrentUser(
      githubStorage.getAccessToken()
    );
    const githubUserRepositories = await githubService.getCurrentUserRepositories(
      githubStorage.getAccessToken()
    );
    const githubSelectedRepository = githubStorage.getSelectedRepository();

    return {
      githubAuthorizationUri: githubAuthorizationUri,
      githubCurrentUser: githubCurrentUser,
      githubUserRepositories: githubUserRepositories,
      githubSelectedRepository: githubSelectedRepository,
    };
  },
};

module.exports = dashboardService;
