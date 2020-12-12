require("dotenv").config();
const express = require("express");
const app = express();
const config = require("./config/app.config");
const path = require("path");
const dashboardRotuer = require("./dashboard/dashboard.router");
const githubRouter = require("./integrations/github/github.router");
const sendGridRouter = require("./integrations/sendgrid/sendgrid.router");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", dashboardRotuer);
app.use("/github", githubRouter);
app.use("/sendgrid", sendGridRouter);

app.listen(config.port, () => {
  console.log(`Application listening on port ${config.port}.`);
});
