import { useState } from 'react'
import './stylesFunction.css'
import ListaElemento from './ListaElemento';
import './stylesLista.css'

// el estado elemento se inicializa con una matriz vacia, se van a ir guardando los elementos en orden
// clic --> llama a la funcion agregarElemento y con set se suma a la matriz
const FunctionComponent = () => {
    // const [state, setState] = useState();
    const [elemento, setElemento] = useState([]);

    const agregarElemento = () => {
        const elementoNuevo = `El elemento ${elemento.length + 1} ha sido añadido a la lista.`;
        setElemento([...elemento, elementoNuevo]);
    };

// por cada elemento se va a mostrar el texto
    return (
        <div>
        <button onClick={agregarElemento}>Agregar elemento</button>
        <ul> 
            {elemento.map((articulo, index) => (
            <ListaElemento key={index} infoElemento={articulo} />
            ))}
        </ul>
        </div>
    )
}

export default FunctionComponent
