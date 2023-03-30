import './App.css'
import React, { useState } from 'react'
import LanguageContext, { languages } from './context';
import Navbar from './components/Navbar';
import Body from './components/Body';


function App() {
  // Crear el estado language que contiene el idioma actual
  const [language, setLanguage] = useState(languages.english);

  const handleChangeLanguage = () => {
    setLanguage((prevLanguage) => {
      //SUGERENCIA: Función que cambia de un idioma a otro (haciendo clic en el botón)
      const nextLanguage = prevLanguage.id === "EN" ? languages.spanish : languages.english;
      return nextLanguage;
    })
  }

  return (
    <div className="App">
      <>{/* SUGERENCIA: Agregue el Provider de LanguageContext */}
        <LanguageContext.Provider value={language}>
          <Navbar onChangeLanguage={handleChangeLanguage} />
          <Body />
        </LanguageContext.Provider>
      </>
    </div>
  )
}

export default App

// Pasamos la función handleChangeLA como prop al componente Navbar.