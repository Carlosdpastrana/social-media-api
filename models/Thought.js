const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction'); // ✅ Import the Reaction Schema

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true, // ✅ Required thought text
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now, // ✅ Auto-generates timestamp
      get: (timestamp) => new Date(timestamp).toLocaleString(),
    },
    username: {
      type: String,
      required: true, // ✅ Required username for the thought
    },
    reactions: [reactionSchema], // ✅ Reactions are an array of subdocuments
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// ✅ Virtual to get reaction count
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

// ✅ Create the Thought model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;