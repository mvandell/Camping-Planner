const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { authMiddleware } = require("./auth/utils");

const app = express();

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Authorization middleware (in ./auth/utils)
app.use(authMiddleware);

//Test route
app.get("/test", (req, res, next) => {
    res.send("Test route");
});

// Backend routes
app.use("/api/food", require("./api/food.js"))
app.use("/auth", require("./auth"));
app.use("/api", require("./api"));

// app.get('*', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
// })

// app.get("/", (req, res, next) => {
//     try {
//       res.send("../index.html");
//     } catch (error) {
//       next(error);
//     }
//   });
  
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

module.exports = app;