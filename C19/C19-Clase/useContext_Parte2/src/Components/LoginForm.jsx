import React from 'react'

const LoginForm = ({handleClick}) => {
  return (
    <div>
        <h1>Debe loguearse</h1>
        <form>
            <input role='email' type="email" />
            <input data-testid='password' type="password"/>
            <button onClick={handleClick}>Enviar</button>
        </form>
    </div>
  )
}

export default LoginForm