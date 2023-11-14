import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Card from './Card'

const RecipeList = () => {
    const [list, setList] = useState([])
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6'
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey

    useEffect(() => {
        axios(url)
        .then(res => setList(res.data.recipes))
    }, [])


  return (
    <div>
        {list.map((recipe) => <Card recipe={recipe} key={recipe.id}/>)}
    </div>
  )
}

export default RecipeList