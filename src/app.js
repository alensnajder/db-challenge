require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./config/app.config");
const githubRouter = require("./integrations/github/github.router");

app.use("/github", githubRouter);

app.listen(config.port, () => {
  console.log(`Application listening on port ${config.port}.`);
});
