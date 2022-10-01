const mongoose = require("mongoose");
const { ObjectId } = require("bson");

// TODO: use getters for createdAt timestamps

const reactionSchema = new mongoose.Schema({
  // TODO: reactionBody 280 character maximum
  reactionId: { type: ObjectId, default: new ObjectId() },
  reactionBody: { type: String, required: true },
  username: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const thoughtSchema = new mongoose.Schema({
  // TODO: thoughtText between 1-280 characters

  thoughtText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  username: { type: String, required: true },
  reactions: [reactionSchema],
});

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
