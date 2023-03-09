import '../components/StylesCard.css'

const Card = ({ artista, pais }) => {
    return (
        <div>
            <h3>El artista musical es {artista}</h3>
            <h3>El país de origen es {pais} </h3>
        </div>
    );
}

export default Card;
