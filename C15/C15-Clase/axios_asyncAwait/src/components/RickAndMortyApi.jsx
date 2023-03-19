import React, { useEffect, useState } from 'react'

const RickAndMortyApi = () => {
    const [characters, setCharacters] = useState([])
    const url = "https://rickandmortyapi.com/api/character/1"

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCharacters(data))
    }, [])

    console.log(characters)

    return (
        <div>
            <h1>{characters.name}</h1>
            <img src={characters.image} alt="" />
        </div>
    )
}

export default RickAndMortyApi