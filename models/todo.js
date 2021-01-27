const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxlength: 255,
      minlength: 5,
    },
  },
  { timestamps: true }
);

module.exports.Todo = mongoose.model("Todo", todoSchema);
