import axios from 'axios'
import {createContext, useContext, useState, useEffect } from 'react'

const RecipeStates = createContext()

const Context = ({children}) => {
    const [list, setList] = useState([])
    const [favs, setFavs] = useState([])
    console.log(favs)
    const apiKey = '68d481a0fbc340308fbf934f836ee8c6' // USAR OTRA KEY
    const url = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=' + apiKey

    useEffect(() => {
        axios(url)
        .then(res => setList(res.data.recipes))
    }, [])

    return (
        <RecipeStates.Provider value={{
            list, setList,
            favs, setFavs,
            apiKey
            }}>
            {children}
        </RecipeStates.Provider>
    )
}

export default Context

export const useRecipeStates = () => useContext(RecipeStates)