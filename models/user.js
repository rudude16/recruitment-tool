const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      validate(v) {
        if (!validator.isEmail(v)) throw new Error("Email not valid!");
      },
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    _recruiter: { type: mongoose.Schema.Types.ObjectId, ref: "Recruiter" },
    _candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

// Generate The token for a particular user and save the token in its database
userSchema.methods.generateAuth = async function () {
  const user = this;
  const token = await jwt.sign({ _id: user.id.toString() }, "hellofriends");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// Login the user with given emailid and password. If no user is found or password is not matched throw error
userSchema.statics.login = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) throw new Error("Unable to Login!");
  if (bcrypt.compare(user.password, password)) {
    return user;
  }
  throw new Error("Unable to Login!");
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
