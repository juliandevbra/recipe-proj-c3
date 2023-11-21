import React from 'react'
import { useSalarioStates } from '../Context/SalarioContext'
import lobo from './lobo.png'

const LoboEstepario = () => {

  const {salario, setSalario} = useSalarioStates()
  console.log('Se renderizó el lobo')
  return (
    <div className='lobo-estepario'>
        <img className='lobo' src={lobo} alt='lobo'/>
        <h3>Total: {salario*6}</h3>
        <button onClick={() => setSalario(salario + 50000)}>Pedir aumento</button>
    </div>
  )
} 

export default LoboEstepario