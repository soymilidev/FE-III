import React, { useContext } from 'react'
import "../App.css"
import LanguageContext from '../context'

const Navbar = ({ onChangeLanguage }) => {
    // const { language } = useContext(LanguageContext);
    // const { text } = language
    const { text } = useContext(LanguageContext);

    return (
        <div className="navbar">
            <p>{text.home}</p>
            <p>{text.current}</p>
            <button onClick={onChangeLanguage}>{text.button}</button>
        </div>
    )
}

export default Navbar