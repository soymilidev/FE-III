import { useParams } from 'react-router-dom';
import hoteles from '../hoteles.json';


const Details = () => {
    // useParams --> obtener el valor de un parámetro específico de la URL (id) para buscar el hotel en el archivo json
    const { id } = useParams();
    // Find --> buscar el objeto de hotel en el json donde el id sea igual al valor del parámetro id de la URL
    const hotel = hoteles.find((hotel) => hotel.id === id);

    if (!hotel) {
        return <h2>El hotel que está buscando ya no está disponible</h2>;
    }

    return (
        <div className='details'>
            <h2>{hotel.name}</h2>
            <img src={hotel.img} alt={hotel.name} />
            <p>{hotel.description}</p>
            <p>💸{hotel.daily_price}</p>
            <p>🗺️{hotel.city}</p>
            <p>⭐{hotel.stars} stars</p>
            <ul>
                <li>🐰Wifi: {hotel.wifi ? 'Sí' : 'No'}</li>
                <li>🪁Aire acondicionado: {hotel['air-conditioned'] ? 'Sí' : 'No'}</li>
                <li>📞Teléfono: {hotel.phone}</li>
                {/* <li>Email: {hotel.email}</li> */}
                <li>📨 Email: <a href={`mailto:${hotel.email}`} target="_blank">{hotel.email}</a></li>
            </ul>
        </div>
    );
};

export default Details;