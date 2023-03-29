import React from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const RecipeDetail = () => {
  //Llamo a recipes mediante useRecipeStates (en vez de prop)
  const { recipes } = useRecipeStates()
  const params = useParams()
  console.log(params)
  const recipeSelected = recipes.find((recipe) => recipe.id == params.id)
  console.log(recipeSelected)
  return (
    <div>
      <h2>{recipeSelected.title}</h2>
      <img src={recipeSelected.image} alt="" />
      <h4>{recipeSelected.instructions}</h4>
    </div>
  )
}

export default RecipeDetail