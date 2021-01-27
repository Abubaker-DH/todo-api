const express = require("express");
const Todo = require("../models/todo");
const router = express.Router();

// Get All TODO route
router.get("/", async (req, res) => {
  res.send("Get all TODOs");
});

// Get One TODO route
router.get("/:id", async (req, res) => {
  res.send("Get one TODO by ID");
});

// Crate new TODO route
router.post("/", async (req, res) => {
  // create todo
  const todo = new Todo({ title: req.body.title });
  await todo.save();
  res.send(todo);
});

// Update TODO route
router.put("/:id", async (req, res) => {
  res.send("Update one TODO by ID");
});

// Delete TODO route
router.delete("/:id", async (req, res) => {
  res.send("Delete one TODO by ID");
});

module.exports = router;
