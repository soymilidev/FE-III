import { createContext, useContext, useState, useEffect, useReducer } from "react";
import Swal from "sweetalert2";

const PokeStates = createContext()

const themes = {
    dark: {
        theme: false,
        bgColor: 'black',
        color: 'white'
    },
    light: {
        theme: true,
        bgColor: 'white',
        color: 'black'
    }
}

const initialThemeState = themes.light
const initialFavState = JSON.parse(localStorage.getItem('favs')) || []
const initialApiState = { pokeList: [], pokeDetail: {} }

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

const favReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return [...state, action.payload]
        default:
            throw new Error
    }
}

const apiReducer = (state, action) => {
    switch (action.type) {
        case 'GET_POKES':
            return { pokeList: action.payload, pokeDetail: state.pokeDetail }
        case 'GET_POKE':
            return { pokeDetail: action.payload, pokeList: state.pokeList }
    }
}

const Context = ({ children }) => {

    const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeState)
    const [favState, favDispatch] = useReducer(favReducer, initialFavState)
    const [apiState, apiDispatch] = useReducer(apiReducer, initialApiState)

    const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(favState))
    }, [favState])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            /* 
            // es lo mismo que hacer
            .then(res => {
                return res.json()
            })
            */
            .then(data => apiDispatch({ type: 'GET_POKES', payload: data.results }))
            .catch(err => Swal.fire('Oops...', 'Ha ocurrido el siguiente error: ' + err, 'error'))
    }, [])

    return (
        <PokeStates.Provider value={{ apiState, apiDispatch, themeState, themeDispatch, favState, favDispatch }}>
            {children}
        </PokeStates.Provider>
    )
}

export default Context

export const usePokeStates = () => useContext(PokeStates)