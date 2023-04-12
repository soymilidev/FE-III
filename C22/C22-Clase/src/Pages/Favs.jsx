import React from 'react'


//info para renderizar, si no habia que cambiar el estado
const Favs = () => {

  const favs = localStorage.getItem('favs')
  let parsedFavs = JSON.parse(favs) || []
  return (
    <div>
      {parsedFavs.map(pokeFav => (
        <div>
          <h3>{pokeFav.name}</h3>
          <img src={pokeFav.sprites?.front_default} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Favs