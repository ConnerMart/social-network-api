const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // TODO: fill this out according to instructions
  // TODO username unique, username trimmed
  // TODO email unique, email valid
  // TODO thoughts and friends references
  // TODO virtual called friendCount
  username: { type: String, required: true },
  email: { type: String, required: true },
  thoughts: [],
  friends: [],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
