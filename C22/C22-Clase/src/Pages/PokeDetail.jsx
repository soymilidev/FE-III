import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


// Con useParams obtengo el valor de .name
const PokeDetail = () => {
  const [poke, setPoke] = useState({})
  const { name } = useParams()
  // + name --> me trae ese parametro
  const url = 'https://pokeapi.co/api/v2/pokemon/' + name
  let favs = localStorage.getItem('favs') || []

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setPoke(data))
  }, [])

  const addFav = () => {
    if (favs === []) {
      // si no hay nadaaaaaaaa, que simplemente sea un array con el primer pokemon.
      // si o si lo coloco en un array para que dsp lo pueda seguir acumulando.
      favs = [poke]
    } else {
      let parsedFavs = JSON.parse(favs)
      // si ya hay un pokemon, le pasa todo lo que contiene favs + el nuevo (, poke).
      favs = [...parsedFavs, poke]
    }
    // no interpreta objetos, por eso aplicamos stringify
    localStorage.setItem('favs', JSON.stringify(favs))
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