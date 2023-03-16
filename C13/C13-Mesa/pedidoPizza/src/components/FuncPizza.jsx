import React, { useState, useEffect } from 'react';

const Pizza = () => {
    const [producto, setProducto] = useState(null);
    useEffect(() => {
        console.log("El componente fue montado");
        setTimeout(() => {
            setProducto("pizza");
        }, 2000);

        return () => 
            console.log("El componente fue desmontado---");
    }, []);


    useEffect(() => {
        if (producto) {
            console.log("El componente fue actualizado");
        }
    }, [producto]);

    const cancelarPedido = () => {
        alert("Pedido cancelado");
        setProducto(null);
        console.log("El componente fue desmontado");
    };

    
    return (
        <div>
            <h1>Pedidos</h1>
            <h3>{producto}</h3>
            <button onClick={cancelarPedido}>Cancelar</button>
        </div>
    );
};

export default Pizza;