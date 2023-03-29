import { createContext, useContext, useState, useEffect } from "react";

// RecipeStates es un contexto
const RecipeStates = createContext()

// Creo el componente Context donde voy a crear los estados que voy a repartir por la aplicacion
// useEffect aparece en el momento que nace un componente. El componente se llama ContextRe, donde esta declarado en el main.
// Cuando se renderiza ContextRe se ejecuta useEffect

const ContextRe = ({ children }) => {
    const [recipes, setRecipes] = useState([])
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))
    }, [])

    return (
        <RecipeStates.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipeStates.Provider>
    )
}
export default ContextRe

export const useRecipeStates = () => useContext(RecipeStates)