const mongoose = require("mongoose");
const winston = require("winston");

module.exports = () => {
  mongoose
    .connect("mongodb://localhost:27017/todo-db", {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    })
    .then(() => winston.info("Connected to MongoDB..."))
    .catch((err) => {
      winston.info(err, "Connecting to BD faild ...");
    });
};
