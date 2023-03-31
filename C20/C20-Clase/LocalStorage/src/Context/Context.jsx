import { createContext, useContext, useState, useEffect } from "react";

const RecipeStates = createContext()

// Llamo al token
const Context = ({ children }) => {
    const [recipes, setRecipes] = useState([])
    const [auth, setAuth] = useState(false)
    let token = localStorage.getItem('token')

    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))
    }, [])


    // Si bien no hay nada dentro, hacer correr todo de nuevo c/ vez que hay un cambio
    useEffect(() => {

    }, [auth])

    return (
        <RecipeStates.Provider value={{ recipes, setRecipes, token, setAuth }}>
            {children}
        </RecipeStates.Provider>
    )
}
export default Context

export const useRecipeStates = () => useContext(RecipeStates)