import React from 'react';

function Saludo(props) {
    return (
        <>
        <p>¡Hola {props.nombre}!</p>
        {props.children}
        </>
    );
}

export default Saludo;
