const express = require("express");

const {
  getAllSnacks,
  getOneSnack,
  addNewSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks");

const snacks = express.Router();

// All snacks
snacks.get("/", async (_, response) => {
  console.log("GET request to /snacks");
  const allSnacks = await getAllSnacks();
  if (allSnacks.length === 0) {
    response.status(500).json({ error: "server error" });

    return;
  }

  response.status(200).json({ success: true, payload: allSnacks });
});

// Show snack
snacks.get("/:id", async (request, response) => {
  console.log("GET request to /snacks/:id");
  const snack = await getOneSnack(request.params.id);
  if (snack.id) {
    response.status(200).json(({ success: true, payload: snack }));
  } else {
    response.status(404).json(({ success: false, payload: snack }));
  }
});

// Create snack
snacks.post("/", async (request, response) => {
  try {
    console.log("POST request to /snacks");
    const newSnack = await addNewSnack(request.body);
    response.json(newSnack);
  } catch (error) {
    response.status(400).json({ error: error });
  }
});

// Delete snack
snacks.delete("/:id", async (request, response) => {
  console.log("DELETE request to /snacks/:id");
  const deletedSnack = await deleteSnack(request.params.body);
  if (deleteSnack.id) {
    response.status(200).json(({ success: true, payload: deletedSnack }));
  } else {
    response.status(404).json("not found");
  }
});

// Update snack
snacks.put("/:id", async (request, response) => {
  console.log("UPDATE request to /snacks/:id");
  const updatedSnack = await updateSnack(request.params.id, request.body);
  if (updatedSnack.id) {
    response.status(200).json(({ success: true, payload: updatedSnack }));
  } else {
    response.status(404).json("not found");
  }
});

module.exports = snacks;
