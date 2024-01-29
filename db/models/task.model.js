const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minlength: 1,
  },

  status: {
    type: String,
    required: true,
    minlength: 1,
  },

  dueDate: {
    type: Date,
    required: true,
  },
  _userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = { Task };
