const coding = require("../axios-apis-setup/Coding");

const getUserInfo = async (platform, userName) => {
  const response = await coding.get(`/${platform}/${userName}`, {});
  return response;
};

module.exports = getUserInfo;
