import { createContext, useContext, useState, useEffect, useReducer } from "react"

const PokeStates = createContext()


// 1.Children
// las cards se pueden rendereizar en el home o en el context, es lo mismo. Quizas los pueda llegar a necesitar en App, se llega al mismo resultado. 
const Context = ({ children }) => {
    const [pokeList, setPokeList] = useState([])
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

    // fetch dentro del useEffect, si no lo va a hacer muchas veces.
    // La respuesta la transformo en un json. La info del json lo transformo en data. Necesito solo los resultados --> .results
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPokeList(data.results))
    }, [])

    // value -> la info que trabajo aca, poder pasarselo a los componentes hijos.
    // children reemplaza App en main.
    return (
        <PokeStates.Provider value={{ pokeList, setPokeList }}>
            {children}
        </PokeStates.Provider>
    )
}

// Llevo el context al main
export default Context

// funcion para ahorrarme el useContext en todos los archivos.
export const usePokeStates = () => useContext(PokeStates)

//OK