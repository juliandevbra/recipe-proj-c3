import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecipeStates } from '../Context/RecipeContext'

const RecipeDetail = () => {
    const params = useParams()
    const {state, dispatch} = useRecipeStates()
    const {title, image, instructions} = state.recipeDetail
    console.log(params)
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6' // USAR OTRA KEY
    const url = `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${apiKey}`

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_RECIPE', payload: res.data}))
    }, [])


  return (
    <div>
        <h2>{title}</h2>
        <img src={image} alt="" />
        <p>{instructions}</p>
        <button onClick={() => dispatch({type: 'ADD_FAV', payload: recipe})}>⭐</button>
    </div>
  )
}

export default RecipeDetail