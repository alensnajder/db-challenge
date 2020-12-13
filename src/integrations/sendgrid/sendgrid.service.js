const axios = require("axios");

const baseUri = "https://api.sendgrid.com/v3";

const sendGridService = {
  getCurrentUser: async (apiKey) => {
    let currentUser;

    try {
      const response = await axios.get(`${baseUri}/user/profile`, {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      });
      currentUser = response.data;
    } catch (error) {
      console.log(error.response.data);
    }

    return currentUser;
  },
  getStats: async (apiKey, startDate) => {
    let stats;

    try {
      const response = await axios.get(
        `${baseUri}/stats?start_date=${startDate}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );
      stats = response.data[0].stats[0].metrics;
    } catch (error) {
      console.log(error.response.data);
    }

    return stats;
  },
};

module.exports = sendGridService;
