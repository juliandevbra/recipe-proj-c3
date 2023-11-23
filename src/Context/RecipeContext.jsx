import axios from 'axios'
import { useReducer } from 'react'
import {createContext, useContext, useState, useEffect } from 'react'
import { reducer } from '../reducer/reducer'

const RecipeStates = createContext()

const initialState = {
    list: [],
    favs: [],
    recipeDetail: {}
}

const Context = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6' // USAR OTRA KEY
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey

    useEffect(() => {
        axios(url)
        .then(res => dispatch({type: 'GET_RECIPES', payload: res.data.recipes})) 
    }, [])

    return (
        <RecipeStates.Provider value={{
            state, dispatch,
            apiKey
            }}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)