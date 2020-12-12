const express = require("express");
const router = express.Router();
const dashboardService = require("./dashboard.service");

router.get("/", async (req, res) => {
  const dashboardData = await dashboardService.getDashboardData();
  res.render("dashboard", dashboardData);
});

module.exports = router;
