import { useParams } from 'react-router-dom'

// Agrego { recipes }
const RecipeDetail = ({ recipes }) => {
  // useParams() --> filtro todos los elementos
  const params = useParams()

  // Filter trae varios arrays
  // Find busca especificamente y el primero que encuentra con x condicion
  // No utilizamos === para comparar xq es el mismo numero, pero es diferente el tipo de dato
  const recipeSelected = recipes.find((recipe) => params.id == recipe.id)
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