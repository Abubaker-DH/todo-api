require("dotenv").config({ path: "./config.env" });
require("express-async-errors");
const winston = require("winston");
const error = require("./middleware/error");
const todo = require("./routes/todos");
const express = require("express");
const app = express();

require("./middleware/logging")();
require("./middleware/db")();
app.use("/api/todo", todo);
app.use(error);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => winston.info(`Listening on PORT ${PORT}...`));
