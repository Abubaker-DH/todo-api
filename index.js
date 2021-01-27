const express = require("express");
const app = express();

require("./middleware/db")();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}...`));
