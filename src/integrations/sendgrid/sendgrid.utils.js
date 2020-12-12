const sendGridUtils = {
  formatDateForSendGrid: (date) => {
    return date.toISOString().split("T")[0];
  },
};

module.exports = sendGridUtils;
