// DEPENDENCIES
const snacksController = require('./controllers/snackController');
const express = require("express");
const cors = require('cors')
const PORT = process.env.PORT || 3003;

// CONFIGURATION
const app = express();
app.use(express.json())
app.use(cors())


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
