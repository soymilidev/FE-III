import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Esta página renderizará cada bebida de manera individual

const Beer = () => {
    const [beer, setBeer] = useState({});
    const navigate = useNavigate();

    const getBeer = async () => {
        //Deberas completar este fetch con el parametro correspondiente
        const res = await fetch(`https://api.punkapi.com/v2/beers/1`);
        const data = await res.json();
        setBeer(data[0]);
    };

    useEffect(() => {
        getBeer();
    }, []);

    return (
        <div className="grid-contacto">
            {/* <h2>Cerveza numero...</h2> */}
            <h2 className="green">{beer.name}</h2>
            <div className="card">
                <img src={beer.image_url} alt="beer-detail" />
                <p>{beer.tagline}</p>
                <p>{beer.description}</p>
                <p>{beer.brewers_tips} </p>
            </div>
            <button onClick={() => navigate(-1)}>Volver atrás</button>
        </div>
    );
};

export default Beer;