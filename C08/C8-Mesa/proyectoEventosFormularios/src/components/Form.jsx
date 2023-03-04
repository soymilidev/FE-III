import React, { useState } from 'react';
import './StylesForm.css'
import Image from './Image';

    function Form() {
    const [artist, setArtist] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [url, setUrl] = useState("");
    const [isRegistered, setIsRegistered] = useState(false);

/*  
    const handleBirthdateChange = event => {
        setBirthdate(event.target.value);
    }; 
*/

    const handleSubmit = event => {
        event.preventDefault();
        setIsRegistered(true);
    };

    return (
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <label>
                Nombre del artista:
                <input type="text" onChange={(event) => setArtist(event.target.value)}/>
            </label>
            <label>
                Fecha de nacimiento:
                <input type="text" onChange={(event) => setBirthdate(event.target.value)}/>
                {/* <input type="text" value={birthdate} onChange={handleBirthdateChange}/> */}
            </label>
            <label>
                URL de la imagen:
                <input type="text" onChange={(event) => setUrl(event.target.value)}/>
            </label>
            <button type="submit">Registrar</button>
        </form>

        {isRegistered && (
        <>
            <h2>¡Registro exitoso!</h2>
            <Image url={url} />
            <h3>{artist}</h3>
            <h3>Fecha de nacimiento: <br/> {birthdate}</h3>
        </>
        )
        }
        </div>
    );
}

export default Form;
