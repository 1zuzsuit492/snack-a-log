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
    const { name, fiber, protein, added_sugar, is_healthy, image } = newSnack;
    const snack = await database.one(
      "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image]
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
  const { name, fiber, protein, added_sugar, is_healthy, image } = snack;
  const query =
    "UPDATE snacks SET name=$1, fiber=$2, protein=$3, added_sugar=$4, is_healthy=$5, image=$6 WHERE id=$7 RETURNING *";
  const values = [name, fiber, protein, added_sugar, is_healthy, image, id];
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
