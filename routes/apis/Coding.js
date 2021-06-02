const axios = require("axios");

const competitiveCoding = axios.create({
  baseURL: "https://competitive-coding-api.herokuapp.com/api/",
});

module.exports = competitiveCoding;
