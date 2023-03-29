// Traigo el contexto
import { createContext, useContext, useState } from "react";

// Creo el contexto en donde lo guardo, una variable en mayuscula en lo posible.
// Hacemos de cuenta que estamos trabajando con una especie de componente. Mediante createContext le da el atributo de componente.
// Cuando creamos un contexto hay un consumidor y un proveedor.
export const GlobalStates = createContext()

// Creamos un componente en donde vamos a guardar cada uno de los datos de la aplicación, que sean globales.
const Context = ({ children }) => {
    const [salario, setSalario] = useState(150000)

    // Retornamos etiquetas de GlobalStates (xq lo tratamos como si fuese un componente, utilizamos mayusculas) y utilizamos el proveedor.
    // La etiqueta acepta value, dentro tiene que ir un objeto donde se le coloca todas las variables y la informacion que vamos a pasar a toda la aplicación.
    // Segun donde apliquemos el contexto, children (contener los elementos en App.jsx o mejor ponerlo en el main). Children va a ser reemplazado segun donde este ubicado/que contengacontext.
    return (
        <GlobalStates.Provider value={{ salario, setSalario }}>
            {children}
        </GlobalStates.Provider>
    )
}

export default Context
// El método useContext, usa GlobalStates (es el contexto que cree). La función trae todos los estados globales. 
export const useGlobalStates = () => useContext(GlobalStates)