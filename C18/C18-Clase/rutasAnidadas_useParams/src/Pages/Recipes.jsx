import { Link } from 'react-router-dom'
import Card from '../Components/Card'

// Agrego { recipes } que viene del useState que luego actualiza la ruta recipes...
const Recipes = ({ recipes }) => {
  return (
    <div>
      <h2>Lista de recetas random</h2>
      {recipes.map(recipe => <Link key={recipe.id} to={'/recipe/' + recipe.id}><Card recipe={recipe} /></Link>)}
      {/* Cada una de las cards me lleve al id de la receta */}
    </div>
  )
}

export default Recipes