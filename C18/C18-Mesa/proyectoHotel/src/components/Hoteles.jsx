import hoteles from '../hoteles.json';
import Card from './Card';

// importar json
// recorremos cada objeto hotel de hoteles y creamos una card. cada elemento lo identificamos con un id

const Hoteles = () => {
    return (
        <div className='container'>
            {hoteles.map((hotel, index) => (
                <Card key={index} hotel={hotel} />
            ))}
        </div>
    )
}

export default Hoteles;