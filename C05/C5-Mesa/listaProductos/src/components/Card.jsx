import './styleCard.css'

// 1. Crear un componente de React. 
// 2. Se le pasa un objeto como propiedad
const Card = ({cadaProducto}) => {
return (
    <div key={cadaProducto.id} className='card'>
        <img className="card-img" src={cadaProducto.imagen} alt='Foto producto' />
        <h3 className="card-nombre">{cadaProducto.nombre}</h3>
        <h4 className="card-precio">{cadaProducto.precio}</h4>
    </div>
)
}

export default Card
