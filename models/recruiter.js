const mongoose = require("mongoose");

const recruiterSchema = mongoose.Schema({
  name: {
    firstName: { type: String, required: true },
    lastName: { type: String },
    required: true,
  },
  organization: {
    type: String,
  },
  avatar: {
    type: Buffer,
  },
});

const recruiter = mongoose.model("recruiter", candidateSchema);

module.exports = recruiter;
