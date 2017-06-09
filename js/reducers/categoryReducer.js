var intialState = {
    categories: [],
    fetching: false,
    fetched: false,
    error: null,
  };

export function categoryReducer(state=intialState , action) {

    switch (action.type) {
      case "FETCH_CATEGORY": {
        return {...state, fetching: true}
      }
      case "FETCH_CATEGORY_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_CATEGORY_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          categories: action.payload,
        }
      }
      case "ADD_CATEGORY": {
        return {
          ...state,
          categories: [...state.categories, action.payload],
        }
      }
      case "UPDATE_CATEGORY": {
        const { id, text } = action.payload
        const newCategories = [...state.categories]
        const categoryToUpdate = newCategories.findIndex(category => category.id === id)
        newCategories[categoryToUpdate] = action.payload;

        return {
          ...state,
          categories: newCategories,
        }
      }
      case "DELETE_CATEGORY": {
        return {
          ...state,
          categories: state.categories.filter(category => category.id !== action.payload),
        }
      }
    }

    return state
}
