const coding = require("./apis/Coding");

const getUserInfo = async (platform, userName) => {
  const response = await competitiveCoding.get(`/${platform}/${userName}`, {});
  return response;
};

module.exports = getUserInfo;
