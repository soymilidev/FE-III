import React, { useEffect, useState } from 'react'

const PokemonApi = () => {
    const [poke, setPoke] = useState({})
    const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

    useEffect(() => {
        const fetchData = async () => {
            let response = await fetch(url)
            let data = await response.json()
            console.log(data)
            setPoke(data)
        }
        fetchData()
    }, [])
    
    console.log(poke)
    return (
        <div>
            <h3>{poke.name}</h3>
            <img src={poke.sprites?.front_default} alt=""/>
        </div>
    )
}

export default PokemonApi