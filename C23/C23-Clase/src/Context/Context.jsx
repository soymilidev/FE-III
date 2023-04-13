import { createContext, useContext, useState, useEffect, useReducer } from "react"


const PokeStates = createContext()

// Si esta en modo dark que sea true
const themes = {
    dark: {
        theme: true,
        bgColor: 'black',
        color: 'white'
    },
    light: {
        theme: false,
        bgColor: 'white',
        color: 'black'
    }
}

// useReducer
const initialApiState = []
const intialThemeState = themes.light
// exista || o no, siempre va a haber un array [] (va a poder mapear). Si no, va a querer mapear un valor "null" y daria error.
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []

const apiReducer = (state, action) => {
    switch (action.type) {
        case 'GET_POKES':
            return action.payload
        default:
            throw new Error
    }
}

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'SWITCH_DARK':
            return themes.dark
        case 'SWITCH_LIGHT':
            return themes.light
        default:
            throw new Error
    }
}

// ¿Cómo se vuelca lo que tiene el favState en el favReducer? con el state. el state es lo que vale en el favState.
// ¿favState = state? | const favReducer = (favState, action) => {
//action.payload sumo al state
const favReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return [...state, action.payload]
        default:
            throw new Error
    }
}
//Ejemplo con tercer argumento
// function initFav(initialFavState) {
//     return localStorage.getItem('favs') ? 
//         JSON.parse(localStorage.getItem('favs')) : 
//         initialFavState
// }

const Context = ({ children }) => {
    const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)
    const [themeState, themeDispatch] = useReducer(themeReducer, intialThemeState)
    const [favState, favDispatch] = useReducer(favReducer, initialFavState)

    //useReducer con tercer argumento
    // const [favState, favDispatch] = useReducer(favReducer, initialFavState, initFav)


    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => apiDispatch({ type: 'GET_POKES', payload: data.results }))
    }, [])

    return (
        <PokeStates.Provider value={{ apiState, themeState, themeDispatch, favState, favDispatch }}>
            {children}
        </PokeStates.Provider>
    )
}
export default Context

export const usePokeStates = () => useContext(PokeStates)