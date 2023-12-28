const initialState = {
    favori: []
}
export const favoriActions = {
    setFavorites: "SET_FAVORITES",
    addFavorite: "ADD_FAVORITES",
    removeFavorite: "REMOVE_FAVORITES"
}

export const favoriReducer = (state = [], action) => {
    switch (action.type) {
        case favoriActions.setFavorites:
            return action.payload
            
        case favoriActions.addFavorite:
            return [...state, action.payload]

        case favoriActions.removeFavorite:
            return state.filter(item => item.id !== action.payload)

        default:
            return state
    }

}