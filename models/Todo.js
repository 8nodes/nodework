const mongoose = require('mongoose');

const stepSchema = new mongoose.Schema({
  description: String,
  completed: { type: Boolean, default: false },
});

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  steps: [stepSchema],
  completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
