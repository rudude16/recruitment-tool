const github = require("./apis/github");

const userInfo = async (userName) => {
  const response = await github.get(`users/${userName}`, {});
  return response;
};

module.exports = userInfo;
