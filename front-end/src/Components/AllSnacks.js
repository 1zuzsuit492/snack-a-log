import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import HeartHealth from "./HeartHealth";

function AllSnacks() {
    const URL = process.env.REACT_APP_API_URL;
    const [snacks, setSnack] = useState([]);

    useEffect(() => {
        axios.get(`${URL}/snacks`)
            .then(response => {
                setSnack(response.data)
            })
            .catch((err) => console.warn(err));
    }, [URL])

    return (
        <div className="AllSnacks">
            {snacks.map((snack) => {
                return (
                    <Link to={`/snacks/` + snack.id} key={snack.id} className="snack-card">
                        <img src={snack.image} alt="" />
                        <p>
                            {<HeartHealth snackHealth={snack.is_healthy} />}
                            {snack.name}
                        </p>
                    </Link>
                )
            })}
        </div>
    );

}

export default AllSnacks;