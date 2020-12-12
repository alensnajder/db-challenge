const express = require("express");
const router = express.Router();
const githubService = require("./github.service");
const githubAuth = require("./github.auth");
const githubStorage = require("./github.storage");
const githubPush = require("./github.push");

router.get("/oauth/authorization_callback", async (req, res) => {
  if (req.query.code) {
    githubStorage.setAccessToken(
      await githubAuth.getAccessToken(req.query.code)
    );
  }
  res.redirect("/");
});

router.post("/repositories", async (req, res) => {
  const repository = await githubService.getRepositoryById(
    githubStorage.getAccessToken(),
    req.body.repository_id
  );
  githubStorage.setSelectedRepository(repository);
  githubPush.start();
  res.redirect("/");
});

router.get("/logout", (req, res) => {
  githubStorage.setAccessToken(null);
  githubStorage.setSelectedRepository(null);
  githubPush.stop();
  res.redirect("/");
});

module.exports = router;
