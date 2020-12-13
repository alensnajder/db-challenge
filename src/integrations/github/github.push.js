const cron = require("node-cron");
const Databox = require("databox");
const githubService = require("./github.service");
const githubStorage = require("./github.storage");

const dataBoxClient = new Databox({
  push_token: process.env.DATABOX_GITHUB_KEY,
});

const task = cron.schedule(
  "* * * * *",
  async () => {
    const repositoryData = await githubService.getRepositoryById(
      githubStorage.getAccessToken(),
      githubStorage.getSelectedRepository().id
    );
    const commitsCount = await githubService.getRepositoryCommitsCount(
      githubStorage.getAccessToken(),
      githubStorage.getSelectedRepository().id
    );
    const currentDate = new Date().toISOString();

    if (repositoryData) {
      dataBoxClient.insertAll([
        {
          key: "github.stargazers_count",
          value: repositoryData.stargazers_count,
          date: currentDate,
        },
        {
          key: "github.subscribers_count",
          value: repositoryData.subscribers_count,
          date: currentDate,
        },
        {
          key: "github.forks_count",
          value: repositoryData.forks_count,
          date: currentDate,
        },
        {
          key: "github.open_issues_count",
          value: repositoryData.open_issues_count,
          date: currentDate,
        },
      ]);
      console.log("Github repository data pushed to Databox.");
    }

    if (commitsCount) {
      dataBoxClient.push({
        key: "github.commits_count",
        value: commitsCount,
        date: currentDate,
      });
      console.log("Github repository commits count pushed to Databox.");
    }
  },
  {
    scheduled: false,
  }
);

const githubPush = {
  start: () => {
    task.start();
  },
  stop: () => {
    task.stop();
  },
};

module.exports = githubPush;
