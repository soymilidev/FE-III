import React, { useState, useEffect } from 'react';

const RecipesApi = () => {
    const [recipes, setRecipes] = useState([]);
    const url = "https://api.spoonacular.com/recipes/random?number=10&apiKey=1cd45a532f8f4ff4ab76e4e57f44bb6b";

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setRecipes(data.recipes));
    }, []);

    return (
        <div>
            <h1>Recetas</h1>
            {recipes.map(recipe => (
                <div key={recipe.id}>
                    <h3>
                        {recipe.title}
                    </h3>
                    <img src={recipe.image} alt="" />
                </div>
            ))}
        </div>
    )
}

export default RecipesApi;