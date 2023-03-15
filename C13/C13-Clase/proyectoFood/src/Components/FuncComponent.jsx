import React, { useEffect, useState } from 'react'

const FuncComponent = ({titulo}) => {
    const [name, setName] = useState('Paula')
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('Se montó el componente de función')
        setTimeout(() => {
            setName('Carlos')
        }, 2000)
        return () => {
            console.log('Se desmontó el componente de función')
        }
    }, [])

    useEffect(() => {
        console.log('Se actualizó el count de componente de función')
    }, [count])

    console.log('Se ha renderizado el componente de función')

    return (
        <div>
            <h1>{titulo}</h1>
            <h3>{name}</h3>
            <button onClick={() => setCount(count + 1)}>+</button>
            <h3>{count}</h3>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}

export default FuncComponent