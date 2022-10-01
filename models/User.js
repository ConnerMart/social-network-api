const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // TODO: username unique, username trimmed
  // TODO: email unique, email valid

  username: { type: String, required: true },
  email: { type: String, required: true },
  // TODO: TEST thoughts and friends references
  // friends returns only IDs ??
  thoughts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thought" }],
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = mongoose.model("User", userSchema);

module.exports = User;
