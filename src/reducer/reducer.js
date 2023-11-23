export const reducer = (state, action) => {
    switch(action.type){
        case 'GET_RECIPES':
            return {...state, list: action.payload}
        case 'GET_RECIPE':
            return {...state, recipeDetail: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETE_FAV':
            // agregar función para eliminar favorito
            return {...state, favs: []}
    }
}