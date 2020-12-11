require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./config/app.config");
const githubRouter = require("./integrations/github/github.router");
const githubService = require("./integrations/github/github.service");

app.use("/oauth/github", githubRouter);

console.log(githubService.getAuthorizationUri());

app.listen(config.port, () => {
  console.log(`Application listening on port ${config.port}.`);
});
