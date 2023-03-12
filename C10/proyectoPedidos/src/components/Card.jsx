import React from 'react'

function Card({ item, index, eliminarItem, pedidoModificable }) {
    return (
        <div className="card">
            <p>{item}</p>
            <button
            type="eliminar"
            onClick={() => eliminarItem(index)}
            disabled={!pedidoModificable}
            >
                Eliminar
            </button>
        </div>
        );
}

export default Card;