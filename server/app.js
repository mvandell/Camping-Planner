const path = require("path");
const express = require("express");
const morgan = require("morgan");
const {authMiddleware} = require("./auth/utils")

const app = express();

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//app.use(express.static(path.join(__dirname, "../public")));

//Authorization middleware (in ./auth/utils)
app.use(authMiddleware);

//Backend routes
app.use("/api/food", require("./api/food"));
app.use("/api", require("./api"));
app.use("/auth", require("./auth"));

// Error handling middleware
app.use((error, req, res, next) => {
  console.error('SERVER ERROR: ', error);
  if (res.statusCode < 400) {
      res.status(500);
  }
  res.send({
      error: error.message,
      name: error.name,
      message: error.message,
      table: error.table,
  });
});

// Default to 404 if no other route matched
// app.use((req, res) => {
//   res.status(404).send("Not found.");
// });

module.exports = app;