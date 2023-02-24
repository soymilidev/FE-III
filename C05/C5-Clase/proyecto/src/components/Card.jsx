import './Card.css'

const Card = ({elementoPizza: elementoPizza}) => {
return (
    <div key={elementoPizza.id} className='card'>
        <img className="card-img" src={elementoPizza.img} alt='Foto pizza' />
        <h3 className="card-title">{elementoPizza.tipo}</h3>
        <h4 className="card-price">{elementoPizza.precio}</h4>
    </div>
)
}

export default Card