import React, { useEffect, useState } from 'react'
import Producto from './Producto';

const Pedido = () => {
    const [pedido, setPedido] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setPedido("Pizza")
        }, 2000);
    }, []);

    const cancelarPedido = () => {
        setPedido()
        alert("El pedido se ha cancelado")
    }

    return (
        <div>
            <h2>Pedido:</h2>
            {pedido && <Producto pedido = {pedido}/>}
            <button onClick={cancelarPedido}>Cancelar pedido</button>
        </div>
    )
}

export default Pedido