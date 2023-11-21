import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ChildComponent from './Clase 13/ChildComponent'
import LoboEstepario from './Clase 13/LoboEstepario'
import ParentComponent from './Clase 13/ParentComponent'
import Navbar from './Components/Navbar'
import SalarioContext from './Context/SalarioContext'
import Beer from './MDT Clase 11/Beer'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import PageNotFound from './Pages/PageNotFound'
import RecipeDetail from './Pages/RecipeDetail'

function App() {

  return (
    <>
    {/* <SalarioContext>
      <ParentComponent />
      <LoboEstepario />
    </SalarioContext> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contacto' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/detail/:id' element={<RecipeDetail/>}/>
        {/* <Route path='/beer/:id' element={<Beer/>}/> */}
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  )

}

export default App
