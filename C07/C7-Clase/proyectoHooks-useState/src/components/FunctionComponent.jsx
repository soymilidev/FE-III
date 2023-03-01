// MODO 1
/* 
import { useState } from 'react'

const FunctionComponent = () => {
    // const [nombreDeLaVariable, funciónParaCambiarLaVariable] = useState(valorInicial)
    // const [estado, modificadorEstado] = useState(valorInicial)
    const [name, setName] = useState(2023)
    const changeName = () => {
        setName("Rosalía")
    }


    return (
        <div>
        <h2>{name}</h2>
        <button onClick={changeName}> Cambiar nombre </button>
        </div>
    )
}

export default FunctionComponent
 */

// MODO 2
// trabajando con un objeto

import { useState } from 'react'

const FunctionComponent = () => {
    // const [estado, modificadorEstado] = useState(valorInicial)
    const [persona, setPersona] = useState({
        name: 'Charly García',
        age: 71,
        country: "Argentina",
})



    const changeName = () => {
        setPersona({...persona, name: "Rosalía"})
    }


    return (
        <div>
        {/* persona es un objeto ahora */}
        <h1>{persona.name}</h1>
        <button onClick={changeName}> Cambiar nombre </button>
        </div>
    )
}

export default FunctionComponent
