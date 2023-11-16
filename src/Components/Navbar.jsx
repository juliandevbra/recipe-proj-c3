import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from './LoginForm'

const Navbar = () => {

    const navigate = useNavigate()

    // Ejemplo para navigate
    // let user = 'admin'
    // let auth = 'admin'
    // const login = (e) => {
    //     e.preventDefault()
    //     if(user == auth){
    //         //redireccione a dashboard
    //         setTimeout(() => {
    //             navigate('/dashboard')
    //         }, 2000)
    //     } else {
    //         navigate('/')
    //     }
    // }

  return (
    <div className='navbar'>
        <button onClick={() => navigate(-1)}>🔙</button>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/contacto'><h3>Contact</h3></Link>
        <Link to='/about'><h3>About</h3></Link>
        <LoginForm/>
        {/* 
        Ejemplo para navigate
        <form onSubmit={login}>
            <input type="text" value={user}/>
            <button>Acceder</button>
        </form> */}
    </div>
  )
}

export default Navbar