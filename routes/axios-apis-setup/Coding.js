const axios = require("axios");

const coding = axios.create({
  baseURL: "https://competitive-coding-api.herokuapp.com/api/",
});

module.exports = coding;
