// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const snacksController = require('./controllers/snackController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (request, response) => {
    response.send("Get Snack'n at Snack-a-log!");
});

app.use("/snacks", snacksController);


//Star(*) matches anything we haven't matched yet.
app.get("*", (request, response) => {
response.status(404).json({error: "Page not found"});
});

// EXPORT
module.exports = app;