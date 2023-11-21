import React, { useState } from 'react'
import { useSalarioStates } from '../Context/SalarioContext'

const ChildComponent = () => {

  const {salario} = useSalarioStates()
  console.log('Se renderizó el hijo')
  return (
    <div className='child'>
        <h3>ChildComponent</h3>
        <p>Cuanto ganas por semestre?</p>
        <h3>Total: {salario*6} </h3>
    </div>
  )
}

export default ChildComponent
