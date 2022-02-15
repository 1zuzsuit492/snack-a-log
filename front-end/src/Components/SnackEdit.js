import { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function SnackEdit() {
    const URL = process.env.REACT_APP_API_URL;
    const { id } = useParams();
    const navigate = useNavigate();
    const [snack, setSnack] = useState({
        name: "",
        fiber: "",
        protein: "",
        added_sugar: "",
        is_healthy: false,
        image: "",
    });

    const handleChange = (event) => {
        if (event.target.id === "is_healthy") {
            setSnack({ ...snack, is_healthy: !snack.is_healthy });
        } else {
            setSnack({ ...snack, [event.target.id]: event.target.value });
        }
    };

    useEffect(() => {
        axios.get(`${URL}/transactions/${id}`)
            .then((response) => {
                console.log(response.data)
                setSnack(response.data);
            })
    }, [URL, id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(`${URL}/snacks/${id}`, snack)
            .then(() => {
                navigate("/");
            }).catch((err) => {
                console.warn(err);
            })
    };

    return (
        <form onSubmit={handleSubmit}>
            <label for="name">Name:</label>
            <input id="name" name="name" value={snack.name}
            onChange={handleChange} placeholder="name"/>
            <label for="fiber">Protein:</label>
            
            <label for="fiber">Fiber:</label>
            <input id="fiber" name="fiber"
            value={snack.fiber} onChange={handleChange} placeholder="fiber"/>

            <label for="protein">Protein:</label>
            <input id="protein" name="protein" value={snack.protein} 
            onChange={handleChange} placeholder="protein"/>
            
            <label for="added_sugar">Added Sugars:</label>
            <input id="added_sugar" name="added_sugar"
            value={snack.added_sugar} onChange={handleChange}
            placeholder="added_sugar"/>

            <label for="is_healthy">Is it Healthy:</label>
            <input id="is_healthy" name="is_healthy"
            value={snack.is_healthy} onChange={handleChange}
            placeholder="is_healthy"/>

            <label for="image">Image:</label>
            <input id="image" name="image" value={snack.image}
            onChange={handleChange} placeholder="image"/>
        </form>
    );
};


export default SnackEdit;


