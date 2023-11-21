import { useRecipeStates } from '../Context/RecipeContext'
import Card from './Card'

const RecipeList = () => {
   
  const {list} = useRecipeStates()


  return (
    <div>
        {list.map((recipe) => <Card recipe={recipe} key={recipe.id}/>)}
    </div>
  )
}

export default RecipeList