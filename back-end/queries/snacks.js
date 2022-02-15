const db = require("../db/dbConfig.js");

const database = require("../db/dbConfig");

const getAllSnacks = async () => {
  try {
    const snacks = await database.any("SELECT * FROM snacks");
    return snacks;
  } catch (err) {
    return err;
  }
};

const getOneSnack = async (id) => {
  try {
    const snack = await database.one("SELECT * FROM snacks WHERE id=$1", id);

    return snack;
  } catch (error) {
    return error;
  }
};

const addNewSnack = async (newSnack) => {
  try {
    const snack = await database.any(
      "INSERT INTO snacks (name, release) VALUES ($1, $2) RETURNING *",
      [newSnack.name, newSnack.release]
    );
    return snack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const snack = await database.one(
      "DELETE FROM snacks WHERE id=$1 RETURNING *",
      id
    );

    return snack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (snack, id) => {
  const query = "UPDATE snacks SET name=$1, release=$2 WHERE id=$3 RETURNING *";
  const values = [snack.name, snack.release, id];
  const updated = await database.one(query, values);

  return updated;
};

// here we are exporting our functions to use in our controllers
module.exports = {
  getAllSnacks,
  addNewSnack,
  getOneSnack,
  deleteSnack,
  updateSnack,
};
