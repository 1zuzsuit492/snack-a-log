// DEPENDENCIES

const express = require("express");

// CONFIGURATION
const app = express();

// MIDDLEWARE

// ROUTES
app.get("/", (request, response) => {
  response.send("Get Snack'n at Snack-a-log!");
});

app.use("/snacks", snacksController);

//Star(*) matches anything we haven't matched yet.
app.get("*", (request, response) => {
  response.status(404).json({ error: "Page not found" });
});

// EXPORT
module.exports = app;
