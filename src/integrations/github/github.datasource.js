const githubStorage = require("./github.storage");
const GithubService = require("./github.service");
const Metric = require("../metric");
const MetricHolder = require("../metricholder");

class GithubDataSource {
  constructor() {
    if (!githubStorage.getSelectedRepository()) {
      throw "User github repository is not set in github storage therefore metrics cannot be obtained.";
    }

    this._selectedRepository = githubStorage.getSelectedRepository();
    this._githubService = new GithubService();
  }

  async getMetrics() {
    console.log("Github get metrics called");
    const repositoryData = await this._githubService.getRepositoryById(this._selectedRepository.id);
    const repositoryCommitsCount = await this._githubService.getRepositoryCommitsCount(this._selectedRepository.id);

    let metrics = this._toMetricsFromRepositoryData(repositoryData);

    if (repositoryCommitsCount != null) {
      metrics.push(new Metric("github.commits_count", repositoryCommitsCount));
    }

    return new MetricHolder("github", metrics);
  }

  _toMetricsFromRepositoryData(data) {
    let metrics = [];
    const observableMetrics = ["stargazers_count", "subscribers_count", "forks_count", "open_issues_count"];

    observableMetrics.forEach((item) => {
      if (data.hasOwnProperty(item) && data[item] != null) {
        metrics.push(new Metric(`github.${item}`, data[item]));
      }
    });
    return metrics;
  }
}

module.exports = GithubDataSource;