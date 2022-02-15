const express = require("express");

const {
  getAllSnacks,
  getOneSnack,
  addNewSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks");
const confirmHealth = require("../confirmHealth");

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
    response.status(200).json({ success: true, payload: snack });
  } else {
    response.status(404).json({ success: false, payload: "not found" });
  }
});

// Create snack
snacks.post("/", async (request, response) => {
  const newSnack = await addNewSnack(request.body);

  if (newSnack.name && newSnack.image) {
    const nameArr = newSnack.name.split(" ");
    let formattedName = [];
    for (const w of nameArr) {
      if (w.length >= 3) {
        formattedName.push(w[0].toUpperCase() + w.slice(1).toLowerCase());
      } else {
        formattedName.push(w);
      }
    }

    newSnack.name = formattedName.join(" ");
    newSnack.is_healthy = confirmHealth(newSnack);

    response.status(200).json({
      success: true,
      payload: newSnack,
    });
  } else if (!newSnack.image) {
    newSnack.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    const formattedName = newSnack.name
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");

    newSnack.name = formattedName;
    newSnack.is_healthy = confirmHealth(newSnack);

    response.status(200).json({
      success: true,
      payload: newSnack,
    });
  } else {
    response.status(404).json({
      success: false,
      payload: "not found",
    });
  }
});

// Delete snack
snacks.delete("/:id", async (request, response) => {
  console.log("DELETE request to /snacks/:id");
  const deletedSnack = await deleteSnack(request.params.id);
  if (deletedSnack.id) {
    console.log("im the response");
    response.status(200).json({ success: true, payload: deletedSnack });
  } else {
    response.status(404).json({ success: false, payload: "not found" });
  }
});

// Update snack
snacks.put("/:id", async (request, response) => {
  console.log("UPDATE request to /snacks/:id");
  const updatedSnack = await updateSnack(request.params.id, request.body);
  if (updatedSnack.id) {
    response.status(200).json({ success: true, payload: updatedSnack });
  } else {
    response.status(404).json("not found");
  }
});

module.exports = snacks;
