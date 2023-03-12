import React, { useState } from "react";
import Card from '../components/Card'

const Form = () => {
    // estados
    const [item, setItem] = useState("");
    const [pedido, setPedido] = useState([]);
    const [pedidoModificable, setPedidoModificable] = useState(true);
    const [pedidoConfirmado, setPedidoConfirmado] = useState(false);
    const [mensajeError, setMensajeError] = useState(false);


    const onChangeItem = (event) => setItem(event.target.value);


    // agregar item al pedido
    function onSubmitForm(event) {
        event.preventDefault();
        if (pedidoModificable && item !== "") {
            setPedido([...pedido, item]);
            setItem("");
        }
    }


    // filter() --> crea un nuevo array con una caracteristica determinada (q el indice del array sea diferente)
    // splice() --> se indica el elemento a eliminar (index) y la cantidad a eliminar (1).
    function eliminarItem(index) {
        if (pedidoModificable) {
            const nuevosItems = [...pedido];
            nuevosItems.splice(index, 1);
            setPedido(nuevosItems);
        }
    }


    function handleValidarPedido(event) {
        event.preventDefault();
        if (pedido.length === 0) {
            setMensajeError(true);
        } else {
            setMensajeError(false);
            setPedidoConfirmado(true);
            setPedidoModificable(false);
        }
    }


    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <label>
                    Agregar ítem:
                </label>
                <input 
                type="text" 
                id="item" 
                value={item} 
                onChange={onChangeItem}
                />
                <button 
                type="submit" 
                disabled={!pedidoModificable}> 
                    Agregar 
                </button>
            </form>


            <h2>Pedido:</h2>
            <div className="cards-container">
                {pedido.map((item, index) => (
                    <Card
                        key={index}
                        item={item}
                        index={index}
                        eliminarItem={eliminarItem}
                        pedidoModificable={pedidoModificable}
                    />
                ))}
            </div>


            <form onSubmit={handleValidarPedido}>
                <button 
                type="submit" 
                disabled={!pedidoModificable}> 
                    Confirmar Pedido 
                </button>
                {mensajeError && <p> Debes agregar al menos un producto </p>}
                {pedidoConfirmado && <p> ¡Pedido exitoso! </p>}
            </form>


            {pedidoConfirmado && (
                <div className="card-pedido">
                    <h3>Resumen del pedido:</h3>
                    <ul>
                        {pedido.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Form;