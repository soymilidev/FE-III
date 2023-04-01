import React, { useReducer, useState } from 'react'

// state.users.map --> objeto que contiene un array state.users
const initialState = {
    users: [
        { id: 1, userName: "Gerardo", email: "gerar@gmail.com" },
        { id: 2, userName: "Magdalena", email: "Magda@gmail.com" },
        { id: 3, userName: "Lucia", email: "lu-cia@gmail.com" },
    ],
};

// users no existe, lo traigo del estado --> users: [...state.users, action.payload]
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_USER':
            return { users: [...state.users, action.payload] }
        // case 'DELETE_USER'
        default:
            throw new Error
    }
}

const UserList = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const [newUser, setNewUser] = useState({
        id: '',
        userName: "",
        email: ""
    })

    // crear un nuevo usuario
    // globalizar todos los onChange en una sola función
    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: 'ADD_USER', payload: newUser })
    }

    return (
        <div>
            <ul>
                {state.users.map(user => <li key={user.id}>{user.userName}</li>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="number" name="id" onChange={handleChange} />
                <input type="text" name="userName" onChange={handleChange} />
                <input type="text" name="email" onChange={handleChange} />
                <button>Submit</button>
            </form>

        </div>
    )
}

export default UserList