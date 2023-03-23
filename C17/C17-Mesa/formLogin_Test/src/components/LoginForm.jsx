import { useState } from "react";


const LoginForm = () => {
    const [nombreApellido, setNombreApellido] = useState("");
    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Nombre y Apellido: ${nombreApellido}`);
        setEnviado(true);
    };

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        if (/^[a-zA-Z\sñÑáéíóúÁÉÍÓÚüÜ^']*$/.test(inputValue)) {
            setNombreApellido(inputValue);
            setError("");
        } else {
            setNombreApellido("");
            setEnviado(false);
            setError("No está permitido el ingreso de números");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nombre y Apellido:
                <br />
                <input
                    type="text"
                    value={nombreApellido}
                    onChange={handleInputChange}
                />
            </label>
            {error && <p>{error}</p>}
            <br />
            <button role="button" type="submit" >Enviar</button>
            {enviado && <p>Formulario enviado con éxito</p>}
        </form>
    );
};

export default LoginForm;