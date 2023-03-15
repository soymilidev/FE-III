import React from 'react'

const Card = ({artista, pais}) => {
    return (
        <div>
            <h2>Artista:<br/> {artista}</h2>
            <h2>País:<br/>{pais}</h2>
        </div>
    )
}

export default Card