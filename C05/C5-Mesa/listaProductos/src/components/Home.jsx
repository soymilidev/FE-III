// import React from 'react'
import logoMappleStore from '../assets/logoMappleStore.jpg'
import MappleStore from '../assets/MappleStore.jpg'
import './styleHome.css'

import Card from "./Card";

const Home = () => {
    const productos = [
        {
        "id": 0,
        "nombre": "Macbook Air 13 Chip M1 256gb",
        "imagen": "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
        "precio": "$ 1499.00"
        },
        {
        "id": 1,
        "nombre": "Amazon Echo Dot (4a Gen.)",
        "imagen": "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
        "precio": "$ 14.99"
        },
        {
        "id": 2,
        "nombre": "Cámara IP Inalámbrica 360°",
        "imagen": "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
        "precio": "$ 39.00"
        },
        {
        "id": 3,
        "nombre": "Cerradura Digital Inteligente Fortezza Zigbee",
        "imagen": "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
        "precio": "$ 99.00"
        }
];

return (
    <>
        <img src={logoMappleStore} className="logo-store" alt="logo MappleStore" />
        <h1>Mapple Store</h1>
        <>
        {/* map: recorrer el array productos y crear un elemento <Card> para cada objeto producto en el array */}
        {/* componente Card: espera dos propiedades (key y cadaProducto) */}
            <ul className="productos-list">
            {productos.map(producto => (
                <Card key={producto.id} cadaProducto={producto} />
            ))}
            </ul>
        </>
        <img src={MappleStore} className="img-store" alt="MappleStore" />
    </> 

);
};

export default Home
