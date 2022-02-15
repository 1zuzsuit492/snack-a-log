import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function AllSnacks() {
  const URL = process.env.REACT_APP_API_URL;
  const [snacks, setSnack] = useState([]);
  console.log(URL);

  useEffect(() => {
    axios
      .get(`${URL}/snacks`)
      .then((response) => {
        setSnack(response.data.payload);
      })
      .catch((err) => console.warn(err));
  }, [URL]);

  console.log(snacks);

  return (
    <div className="AllSnacks">
      {snacks.map((snack) => {
        const { id, name, image, is_healthy } = snack;
        return (
          <article className="Snack">
            <Link to={`/snacks/${id}`}>
              <div className="snack-card">
                <h4>
                  <img
                    src={image}
                    alt={is_healthy ? "healthy food" : "unhealthy food"}
                  />
                </h4>
                <h4>{name}</h4>
                <h4>{is_healthy}</h4>
                <span className="all-display-heart">
                  {HeartHealth(is_healthy)}
                </span>
              </div>
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default AllSnacks;
