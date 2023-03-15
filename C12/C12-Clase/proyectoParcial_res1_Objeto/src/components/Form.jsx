import { useState } from 'react'
import Card from './Card';

const Form = () => {
    const [values, setValues] = useState({
        artista: "",
        pais: "",
    })

    const [show, setShow] = useState(false);
    const [mensajeError, setMensajeError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()
        if (values.artista.indexOf(" ") !== 0 && values.artista.length >= 3 && values.pais.length >6) {
            setShow(true)
            setMensajeError(false)  
        } else {
            setShow(false)
            setMensajeError(true)
        }
    }


    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label> Nombre del artista </label>
            <input 
                placeholder="Ingresa el nombre del artista"
                type="text" 
                name="" 
                value={values.name}
                onChange={(event) =>  setValues( {...values, artista: event.target.value} ) }
            />
            <br/>
            <label> País del artista </label>
            <input 
                placeholder="Ingresa el país del artista"
                type="text" 
                name="" 
                value={values.pais}
                onChange={(event) =>  setValues( {...values, pais: event.target.value} ) }
            />
            <button>Enviar</button>
        </form>
        {mensajeError ? <h4>Por favor chequea que la información sea correcta</h4> : null}
        {show ? <Card artista={values.artista} pais={values.pais}/> : null}
        </div>
    )
}

export default Form