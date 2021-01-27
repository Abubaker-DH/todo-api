const express = require("express");
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
  res.send("Create new TODOs");
});

// Update TODO route
router.post("/:id", async (req, res) => {
  res.send("Update one TODO by ID");
});

// Delete TODO route
router.delete("/:id", async (req, res) => {
  res.send("Delete one TODO by ID");
});

module.exports = router;
