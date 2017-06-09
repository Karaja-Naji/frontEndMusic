
// const initialState = [{
//   name:"",
//   price:0,
//   weight:0,
//   shortdesc:"",
//   thumb:"",
//   category_id:0,
//   cartdesc:"",
//   longdesc:"",
//   stock:"",
//   location:""
// }];

var intialState = {
    products: [],
    fetching: false,
    fetched: false,
    error: null,
  };

export function categoryReducer(state=intialState , action) {

    switch (action.type) {
      case "FETCH_PRODUCT": {
        return {...state, fetching: true}
      }
      case "FETCH_PRODUCT_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_PRODUCT_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          products: action.payload,
        }
      }
      case "ADD_PRODUCT": {
        return {
          ...state,
          products: [...state.products, action.payload],
        }
      }
      case "UPDATE_PRODUCT": {
        const { id, text } = action.payload
        const newProducts = [...state.products]
        const productToUpdate = newProducts.findIndex(product => product.id === id)
        newProducts[productToUpdate] = action.payload;

        return {
          ...state,
          products: newProducts,
        }
      }
      case "DELETE_PRODUCT": {
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload),
        }
      }
    }

    return state
}

