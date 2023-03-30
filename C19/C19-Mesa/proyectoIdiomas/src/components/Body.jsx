import React, { useContext } from 'react'
import LanguageContext from '../context'


// Body no recibe parámetros
const Body = () => {
    const language = useContext(LanguageContext)
    // const { language } = useContext(LanguageContext);
    // const { text } = language;
    // Si language tiene un valor se le asigna text ≠ null
    const text = language ? language.text : null

    // Mostrar una cadena vacía en caso de que la constante 'text' sea null
    return (
        <div>
            <h1>{text ? text.title : ""}</h1>
            <p>{text ? text.description : ""}</p>
        </div>
    )
}

export default Body