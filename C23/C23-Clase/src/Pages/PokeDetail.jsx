import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { usePokeStates } from '../Context/Context'


const PokeDetail = () => {
  const { favDispatch } = usePokeStates()
  const [poke, setPoke] = useState({})
  const { name } = useParams()
  const url = 'https://pokeapi.co/api/v2/pokemon/' + name

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPoke(data))
  }, [])

  /*   
  const addFav = () => {
      if (favs === []) {
        favs = [poke]
      } else {
        let parsedFavs = JSON.parse(favs)
        favs = [...parsedFavs, poke]
      }
      localStorage.setItem('favs', JSON.stringify(favs))
      favDispatch({ type: 'ADD_FAV', payload: poke })
    }
  */

  //el typo es lo que recibe en el reducer.
  // la informacion que quiero que reciba es poke.
  const addFav = () => {
    favDispatch({ type: 'ADD_FAV', payload: poke })
  }

  return (
    <div>
      <h1>{poke.name}</h1>
      <img src={poke.sprites?.front_default} alt="" />
      <br />
      <button onClick={addFav}>⭐</button>
    </div>
  )
}

export default PokeDetail