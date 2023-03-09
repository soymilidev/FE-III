import React, { useState } from 'react';
import Card from './Card';
import './StylesForm.css';

function Form() {
    const [artista, setArtista] = useState('');
    const [pais, setPais] = useState('');
    const [realizarEnvio, setRealizarEnvio] = useState(false);
    const [mensajeError, setMensajeError] = useState('');

    const handleArtista = (event) => {
        setArtista(event.target.value);
    };

    const handlePais = (event) => {
        setPais(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (artista.trim().length < 3 || pais.trim().length < 6) {
            setMensajeError('Por favor chequea que la información sea correcta');
        } else {
            setRealizarEnvio(true);
            setMensajeError('');
        }
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>
                Artista musical:
                <input type="text" onChange={handleArtista} value={artista} />
                </label>
                <label>
                País de origen:
                <input type="text" onChange={handlePais} value={pais} />
                </label>
                <button type="submit">Enviar</button>
            </form>

            {realizarEnvio && (
            <div className="card-container">
            <Card artista={artista} pais={pais} />
            </div>
            )}
            {mensajeError && <div className="mensaje">{mensajeError}</div>}
        </div>
    );
}

export default Form;
