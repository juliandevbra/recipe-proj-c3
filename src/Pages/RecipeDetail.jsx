import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState({})
    const params = useParams()
    const {favs, setFavs} = useRecipeStates()
    console.log(params)
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6' // USAR OTRA KEY
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`

    useEffect(() => {
        axios(url)
        .then(res => setRecipe(res.data))
    }, [])


  return (
    <div>
        <h2>{recipe.title}</h2>
        <img src={recipe.image} alt="" />
        <p>{recipe.instructions}</p>
        <button onClick={() => setFavs([...favs, recipe])}>⭐</button>
    </div>
  )
}

export default RecipeDetail