import { useState } from 'react'
import './stylesFunction.css'
import ListaElemento from './ListaElemento';
import './stylesLista.css'

const FunctionComponent = () => {
    const paises = ["Costa Rica", "Nueva Zelanda", "Tailandia", "España", "Indonesia"];
    const [elemento, setElemento] = useState([]);
    const [indice, setIndice] = useState(0);

    const agregarElemento = () => {
        if (indice < paises.length) {
            setElemento([...elemento, paises[indice]]);
            setIndice(indice + 1);
        } else {
            setIndice(0);
        }
    };

    return (
        <div>
            <button onClick={agregarElemento}>Agregar elemento</button>
            <ul> 
                {elemento.map((elemento, index) => (
                    <ListaElemento key={index} infoElemento={elemento} />
                ))}
            </ul>
        </div>
    )
}

export default FunctionComponent
