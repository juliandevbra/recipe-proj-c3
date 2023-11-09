import React from 'react'

const Card = ({user}) => {
  return (
    <div>
        <h3>Hola, {user.nombre}!</h3>
        <h4>Veo que tu color favorito es 
            <span style={{color: user.color}}>
                {' '}{user.color}
            </span>
        </h4>
    </div>
  )
}

export default Card