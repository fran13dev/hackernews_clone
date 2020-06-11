function createStore(reducer) {
  let currentState = reducer(undefined, {})

  return {
    getState: () => currentState,
    dispatch: action => {
      currentState = reducer(currentState, action)
    }
  }
}

const initialState = {
  favorites: []
}

function favoritesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const favorites = [...state.favorites, action.payload.favorite]
      return { favorites }
    }
    case 'REMOVE_FAVORITE': {
      const favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload.favorite.id
      )
      return { favorites }
    }
    default:
      return state
  }
}

const store = createStore(favoritesReducer)

export default store
