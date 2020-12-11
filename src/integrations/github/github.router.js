const express = require("express");
const router = express.Router();
const githubService = require("./github.service");

router.get("/authorization_callback", (req, res) => {
  githubService.getAccessToken(req.query.code);
  res.end();
});

module.exports = router;
