import axios from "axios";
import server from './../utils/fakeServer';

export function fetchProducts() {

  let url = "http://localhost:8080/myNextProject/public/api/products";

  return function(dispatch) {
    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_PRODUCT_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_PRODUCT_REJECTED", payload: err})
      })
  }
}

export function addProducts( text) {
  //GO TO SERVER 
  //AND RETURN THE SAME ESHE
  console.log("addcategory vv ", text);
  return {
    type: 'ADD_PRODUCT',
    payload: {
      text,
    },
  }
}

export function updateProducts(id, text) {
  return {
    type: 'UPDATE_PRODUCT',
    payload: {
      id,
      text,
    },
  }
}

export function deleteProducts(id) {
  //AFTER SERVER
  return { type: 'DELETE_PRODUCT', payload: id}
}
