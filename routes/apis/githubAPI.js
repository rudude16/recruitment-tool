const github = require("../axios-apis-setup/github");

const userInfo = async (userName) => {
  const response = await github.get(`users/${userName}`, {});
  return response;
};

module.exports = userInfo;
