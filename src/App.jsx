import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
    {toggle ? 
     <ClassComponent/> :
     <FuncComponent/>
     }
     <button onClick={() => setToggle(!toggle)}>Cambiar a {toggle ? 'Funcion' : 'Clase'}</button>
    </>
  )
}

export default App
