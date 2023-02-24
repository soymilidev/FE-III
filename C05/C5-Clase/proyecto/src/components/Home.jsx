import Vesuvius_Pizza from '../assets/Vesuvius_Pizza.png'
import Card from './Card'
import NavBar from './NavBar'
import { homeStyles } from './HomeStyles'

const Home = () => {

    let pizzas = [
        { id: 1, tipo: 'Muzzarella', precio: '$1200', img: 'https://www.johaprato.com/files/styles/flexslider_full/public/pizza_de_mozzarella.jpg?itok=0X9_f7K8' },
        { id: 2, tipo: 'Fugazza', precio: '$1250', img: 'https://www.recetas-argentinas.com/base/stock/Recipe/14-image/14-image_web.jpg.webp' },
        { id: 3, tipo: 'Napolitana', precio: '$1350', img: 'https://img-global.cpcdn.com/recipes/5fb5d55852fa8d06/640x640sq70/photo.webp' },
        { id: 4, tipo: 'Rucula y crudo', precio: '$1500', img: 'https://pizzasargentinas.com/wp-content/uploads/2020/12/rucula-y-jamon-crudo.jpg' },
        { id: 5, tipo: 'Especial', precio: '$1400', img: 'https://saboresmendoza.com/wp-content/uploads/2019/09/pizza.jpg' },
    ]

return (
    <div>
        <NavBar/>
        <>
            <img src={Vesuvius_Pizza} className="logo-pizzeria" alt="pizzeria logo" />
            <h1>Bienvenidos</h1>
        </>
        <div style={homeStyles}>
            {pizzas.map((elementoPizza) => <Card elementoPizza={elementoPizza}/>)}
        </div>
    </div>
)
}

export default Home