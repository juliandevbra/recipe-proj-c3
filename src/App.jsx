import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DogApi from './Components/DogApi'
import CatApi from './Components/CatApi'

function App() {


  return (
    <>
      {/* <DogApi/> */}
      <CatApi/>
    </>
  )
}

export default App
