const express = require("express");
const router = express.Router();
const githubAuth = require("./github.auth");
const githubStorage = require("./github.storage");
const GithubService = require("./github.service");
const DataSource = require("../datasource");
const GithubDataSource = require("./github.datasource");
const Schedule = require("../../schedule/schedule");

const schedule = new Schedule();

router.get("/oauth/authorization_callback", async (req, res) => {
  if (req.query.code) {
    const accessToken = await githubAuth.getAccessToken(req.query.code);
    if (accessToken) {
      githubStorage.setAccessToken(accessToken);
    }
  }
  res.redirect("/");
});

router.post("/repositories", async (req, res) => {
  try {
    const githubService = new GithubService();
    const repository = await githubService.getRepositoryById(req.body.repository_id);
    githubStorage.setSelectedRepository(repository);

    schedule.addJob("github", "* * * * *", new DataSource(new GithubDataSource()));
    schedule.startJob("github");
  } catch (error) {
    console.log(error);
  }

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  githubStorage.setAccessToken(null);
  githubStorage.setSelectedRepository(null);
  schedule.removeJob("github");
  res.redirect("/");
});

module.exports = router;