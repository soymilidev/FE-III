import React, { useState, useEffect } from "react";

const Productos = () => {
    const [productos, setProductos] = useState([]);
    const url = "/api/products";

    useEffect(() => {
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setProductos(data.products);
                console.log("Montaje del componente");
            });
    }, []);

    return (
        <div>
            <ul>
                {productos.map((producto) => (
                    <li key={producto.id}>
                        <h2>{producto.title}</h2>
                        <p>{producto.description}</p>
                        <p>Precio: {producto.price}</p>
                        <p>Stock: {producto.stock}</p>
                        <p>Categoría: {producto.category}</p>
                        <img src={producto.image} alt={producto.title} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Productos;
