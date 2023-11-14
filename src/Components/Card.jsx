import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({recipe}) => {

  return (
    <div>
        <Link to={'/detail/'+ recipe.id}>
            <h3>{recipe.title}</h3>
            <img src={recipe.image} alt="" />
        </Link>
    </div>
  )
}

export default Card