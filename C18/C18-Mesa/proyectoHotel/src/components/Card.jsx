import { Link } from "react-router-dom";


// enlace Link alrededor del botón en lugar de envolver la tarjeta completa.
// Link --> react-router-dom
// hotel prop--> para mostrar los detalles del hotel en la card
// Link --> enlace
const Card = ({ hotel }) => {
    return (
        <div className="card">
            <h2>{hotel.name}</h2>
            <img src={hotel.img} alt={hotel.name} />
            <Link to={`/detalle/${hotel.id}`}>
                <button>Detalles</button>
            </Link>
        </div>
    );
};

export default Card;