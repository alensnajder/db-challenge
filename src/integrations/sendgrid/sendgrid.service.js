const axios = require("axios");
const sendGridStorage = require("./sendgrid.storage");

const baseUri = "https://api.sendgrid.com/v3";

class SendGridService {
  constructor() {
    if (!sendGridStorage.getApiKey()) {
      throw `SendGrid API Key not set.`;
    }

    this._apiKey = sendGridStorage.getApiKey();
  }

  async getCurrentUser() {
    let currentUser;

    try {
      const response = await axios.get(`${baseUri}/user/profile`, {
        headers: {
          Authorization: `Bearer ${this._apiKey}`,
        },
      });
      currentUser = response.data;
    } catch (error) {
      console.log(error);
    }

    return currentUser;
  }

  async getStats(startDate) {
    let stats;

    try {
      const response = await axios.get(
        `${baseUri}/stats?start_date=${startDate}`, {
          headers: {
            Authorization: `Bearer ${this._apiKey}`,
          },
        }
      );
      stats = response.data[0].stats[0].metrics;
    } catch (error) {
      console.log(error);
    }

    return stats;
  }
}

module.exports = SendGridService;