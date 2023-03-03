import React from 'react'

const Image = (props) => {
    return (
        <div>
        {props.url && (
            <img src={props.url} alt="imagen del artista"/>
        )
        }
    </div>
    )
}

export default Image
