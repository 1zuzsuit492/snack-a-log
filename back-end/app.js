// DEPENDENCIES
const app = express();
const cors = require("cors");
const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (request, response) => {
    response.send("Welcome to the Snack-A-Log!");
});

//Star(*) matches anything we haven't matched yet.
app.get("*", (request, response) => {
response.status(404).json({error: "Page not found"});
});

// EXPORT
module.exports = app;