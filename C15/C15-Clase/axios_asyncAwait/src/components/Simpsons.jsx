import React, { useEffect, useState } from 'react'

const Simpsons = () => {
    const [characters, setCharacters] = useState([])
    const url = "https://thesimpsonsquoteapi.glitch.me/quotes?count=10"

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setCharacters(data))
    }, [])

    console.log(characters)

    return (
        <div>
            {characters.map((char, index) => (
                <div key={index}>
                    <h1>{char.character}</h1>
                    <img src={char.image} alt="" />
                </div>
            ))}
        </div>
    )
}

export default Simpsons