import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

const Home = () => {
    const [recipes, setRecipes] = useState([])
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=68d481a0fbc340308fbf934f836ee8c6'

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setRecipes(data.recipes))
    }, [])

    console.log(recipes)

    return (
        <div>
            {recipes.map(recipe => <Card key={recipe.id} recipe={recipe} />)}
        </div>
    )
}

export default Home