import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/Context'

const RecipeDetail = () => {
  const [recipeSel, setRecipeSel] = useState({})

  const params = useParams()
  // params.id --> llama a una receta especifica
  const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=68d481a0fbc340308fbf934f836ee8c6`

  useEffect(() => {
    axios(url)
      .then(res => {
        console.log(res)
        setRecipeSel(res.data)
      })
  }, [])

  // stringify --> convierte el objeto en un string
  // Cuando lo enviamos a localStorage tiene que ser string
  const addFav = () => {
    localStorage.setItem('recipe', JSON.stringify(recipeSel))
  }

  // Para traerlo es conveniente parse, para entender la info, nos trae un objeto
  const showFav = () => {
    let recipeFav = localStorage.getItem('recipe')
    let parsedFav = JSON.parse(recipeFav)
    console.log(parsedFav)
  }

  return (
    <div>
      <h2>{recipeSel.title}</h2>
      <img src={recipeSel.image} alt="" />
      <h4>{recipeSel.instructions}</h4>
      <button onClick={addFav}>Añadir a ⭐</button>
      <button onClick={showFav}>Mostrar ⭐</button>
    </div>
  )
}

export default RecipeDetail