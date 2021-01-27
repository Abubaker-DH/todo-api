const express = require("express");
const todo = require("./routes/todos");
const app = express();

require("./middleware/db")();

app.use("/api/todo", todo);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
