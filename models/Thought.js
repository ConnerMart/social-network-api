const mongoose = require("mongoose");
const { ObjectId } = require("bson");

// TODO: use getter for createdAt timestamp

// TODO: finish reaction schema
const reactionSchema = new mongoose.Schema({
  // TODO reactionBody 280 character maximum
  reactionId: { type: ObjectId, default: new ObjectId() },
  reactionBody: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const thoughtSchema = new mongoose.Schema({
  // TODO: fill this out according to instructions
  // TODO thoughtText between 1-280 characters
  // TODO virtual called reactionCount
  thoughtText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
