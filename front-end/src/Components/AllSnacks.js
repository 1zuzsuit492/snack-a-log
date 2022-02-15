import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeartHealth from "./HeartHealth";

function AllSnacks() {
  const URL = process.env.REACT_APP_API_URL;
  const [allSnacks, setSnack] = useState([]);
  console.log(URL);

  useEffect(() => {
    axios
      .get(`${URL}/snacks`)
      .then((response) => {
        setSnack(response.data.payload);
      })
      .catch((err) => console.warn(err));
  }, [URL]);

  console.log(allSnacks);

  return (
    <div className="AllSnacks">
      {allSnacks.map((snack) => {
        return (
          <>
            <Link
              to={`/snacks/` + snack.id}
              key={snack.id}
              className="snack-card"
            >
              <img src={snack.image} alt="" />
              <p>{<HeartHealth snackHealth={snack.is_healthy} />}</p>
            </Link>
            <h4>{snack.name}</h4>
          </>
        );
      })}
    </div>
  );
}

export default AllSnacks;
