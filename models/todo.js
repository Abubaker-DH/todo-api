const mongoose = require("mongoose");
const Joi = require("joi");

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

function validateTodo(todo) {
  const schema = Joi.object({
    title: Joi.string().required().minlength(5),
  });
  return schema.validate(todo);
}

module.exports.Todo = mongoose.model("Todo", todoSchema);
