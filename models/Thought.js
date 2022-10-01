const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema({
  // TODO: fill this out according to instructions
  // TODO thoughtText between 1-280 characters
  // TODO createdAt Date, default to current timestamp, use getter to format on query
  // TODO reactions reference
  // TODO virtual called reactionCount
  thoughtText: { type: String, required: true },
  createdAt: {},
  username: { type: String, required: true },
  reactions: [],
  // TODO: reaction schema inside above ??
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
