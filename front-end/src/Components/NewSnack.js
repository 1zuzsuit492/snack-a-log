import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const NewSnack = () => {
  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;
  const [snack, setSnack] = useState({
    name: "",
    fiber: 0,
    protein: 0,
    added_sugar: 0,
    is_healthy: false,
  });

  function handleTextChange(event) {
    if (event.target.id === "is_healthy") {
      setSnack({ ...snack, [event.target.id]: !snack.is_healthy });
    } else {
      setSnack({ ...snack, [event.target.id]: event.target.value });
    }
  }

  const addSnack = (newSnack) => {
    axios
      .post(`${API}/snacks/`, newSnack)
      .then((res) => navigate(`/snacks`))
      .catch((error) => console.warn(error));
  };

  function handleSubmit(event) {
    event.preventDefault();
    addSnack(snack);
  }

  return (
    <div className="NewPage">
      <h1>New snack</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          onChange={handleTextChange}
          id="name"
          value={snack.name}
          placeholder="name"
        />
        <label htmlFor="fiber">Fiber</label>
        <input
          type="number"
          onChange={handleTextChange}
          id="fiber"
          value={snack.fiber}
          placeholder="fiber"
        />
        <label htmlFor="protein">Protein</label>
        <input
          type="number"
          onChange={handleTextChange}
          id="protein"
          value={snack.protein}
          placeholder="protein"
        />
        <label htmlFor="added_sugar">Added Sugar</label>
        <input
          type="number"
          onChange={handleTextChange}
          id="added_sugar"
          value={snack.added_sugar}
          placeholder="healthy"
        />{" "}
        <label htmlFor="image">Image</label>
        <input
          type="text"
          onChange={handleTextChange}
          id="image"
          value={snack.image}
        />
        <input type="checkbox" onChange={handleTextChange} id="is_healthy" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewSnack;
