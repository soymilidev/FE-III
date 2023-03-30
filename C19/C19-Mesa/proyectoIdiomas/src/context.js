import { createContext } from 'react';
import EN from "./languages/english.json"
import ES from "./languages/spanish.json"


// Creamos el objeto con 2 idiomas
export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    spanish: {
        id: "ES",
        text: ES
    }
};

// Creamos el contexto con el idioma inglés como predeterminado
const LanguageContext = createContext(languages.english);

export default LanguageContext;