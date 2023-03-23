import React from 'react'

const LoginForm = ({ handleClick }) => {

  return (
    <div>
      <h3>Debe loguearse</h3>
      <form>
        <input role='email' type="email" />
        <input data-testid='pass' type="password" />
        <button onClick={handleClick}>Enviar</button>
      </form>
    </div>
  )
}

export default LoginForm