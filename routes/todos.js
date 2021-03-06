const express = require("express");
const { Todo, validateTodo } = require("../models/todo");
const router = express.Router();

// Get All TODO route
router.get("/", async (req, res) => {
  // excloude __v from doc
  const todos = await Todo.find().select("-__v");
  res.send(todos);
});

// Get One TODO route
router.get("/:id", async (req, res) => {
  // get the todo
  const todo = await Todo.findById(req.params.id);

  if (!todo)
    return res.status(404).send("The todo with the given ID was not found.");

  res.send(book);
});

// Crate new TODO route
router.post("/", async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // create todo
  const todo = new Todo({ title: req.body.title });
  await todo.save();
  res.send(todo);
});

// Update TODO route
router.put("/:id", async (req, res) => {
  const { error } = validateTodo(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // find todo by id and update then send back the NEW one
  const todo = await Todo.findByIdAndUdate(
    req.params.id,
    { title: req.body.title },
    { new: true }
  );
  if (!todo)
    return res.status(400).send("The todo with the given ID was not found.");

  res.send(todo);
});

// Delete TODO route
router.delete("/:id", async (req, res) => {
  const todo = await Todo.findByIdAndRemove(req.params.id);

  if (!todo)
    return res.status(404).send("The todo with the given ID was not found.");

  res.send(book);
});

module.exports = router;
