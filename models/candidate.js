const mongoose = require("mongoose");

const candidateSchema = mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  avatar: {
    type: Buffer,
  },
});

const candidate = mongoose.model("candidate", candidateSchema);

module.exports = candidate;
