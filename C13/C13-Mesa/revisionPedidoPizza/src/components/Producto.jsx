import React, { useEffect } from 'react'

const Producto = ({pedido}) => {
    useEffect(() => {
        console.log("El componente fue actualizado");
        return () => {
            console.log("El componente fue desmontado");
        };
    }, []);

    return (
        <li>
            {pedido}
        </li>
    )
}

export default Producto