import React, { useState } from 'react';

// preventDefault, evitar la funciones predeterminadas, por ejemplo que al enviar no se reinicie.
const Form = () => {
    const [persona, setPersona] = useState({
        name: "",
        bday: ""
    });
    const [show, setShow] = useState(false)


    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log('Tu nombre es ' + name.name + ' y cumplis el ' + name.bday)
        // alert('Tu nombre es ' + name.name + ' y cumplis el ' + name.bday)
        if(persona.name.length > 3) setShow(true);
    }


/* Evento onSubmit={funcion x}, al enviar se dispara la funcion que se colaca dentro de las llaves */
    return (
        <>
        <form onSubmit={handleSubmit}>
            <label> Ingresa tu nombre </label>
            <input type="text" onChange={(event) => setPersona({...persona, name: event.target.value})}/>
            <label> Ingresa tu fecha de cumpleaños </label>
            <input type="text" onChange={(event) => setPersona({...persona, bday: event.target.value})}/>
            <button>Enviar</button>
        </form>
        
        {/* OPERACION TERNARIA */}
        {show ? (
            <>
                <h3>Tu nombre es: {persona.name}</h3>
                <h4>Cumplis años el: {persona.bday}</h4>
            </>
        ) : null}

        {/* Si no hay nada (null) hay que usar la forma: */}
        {show && (
            <>
                <h3>Tu nombre es: {persona.name}</h3>
                <h4>Cumplis años el: {persona.bday}</h4>
            </>
    )
}

        </>
    )
}

export default Form

// NOTAS
    /*     
    Unificamos en la variable de estado Persona
    const [name, setName] = useState("")
    const [bday, setBday] = useState("") 
    */

    /*      
        OPERACION TERNARIA
        1. La condición 
        ?
        que se va a ejecutar si la condición da true
        :
        que se va a ejectuar si la condición da false 
    */
