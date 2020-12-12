const url = require("url");

const githubUtils = {
  getLastPageFromLinkHeader: (linkHeader) => {
    const lastPagePart = linkHeader.split(",")[1];
    const lastPageLink = lastPagePart.substring(
      lastPagePart.lastIndexOf("<") + 1,
      lastPagePart.lastIndexOf(">")
    );
    const queryData = url.parse(lastPageLink, true).query;

    return +queryData.page;
  },
};

module.exports = githubUtils;
