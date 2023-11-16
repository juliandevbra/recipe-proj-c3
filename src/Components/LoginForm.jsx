import React from 'react'

const LoginForm = ({handleClick}) => {

  return (
    <div>
        <h4>Loguear a Recetas DH</h4>
        <input role='Email' type="text"  placeholder='Email'/>
        <input data-testid='Password' type="text" placeholder='Password'/>
        <button onClick={handleClick}>Acceder</button>
    </div>
  )
}

export default LoginForm