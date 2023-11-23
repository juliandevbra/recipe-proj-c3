import { useRecipeStates } from '../Context/RecipeContext'
import Card from './Card'

const RecipeList = () => {
   
  const {state} = useRecipeStates()


  return (
    <div >
        {state.list.map((recipe) => <Card recipe={recipe} key={recipe.id}/>)}
    </div>
  )
}

export default RecipeList