import axios from "axios";
import server from './../utils/fakeServer';

export function fetchCategory() {

  let url = "http://localhost:8080/myNextProject/public/api/categorys";

  return function(dispatch) {
    axios.get(url)
      .then((response) => {
        dispatch({type: "FETCH_CATEGORY_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_CATEGORY_REJECTED", payload: err})
      })
  }
}

export function addCategory( text) {
  //GO TO SERVER 
  //AND RETURN THE SAME ESHE
  console.log("addcategory vv ", text);
  return {
    type: 'ADD_CATEGORY',
    payload: {
      text,
    },
  }
}

export function updateCategory(id, text) {
  return {
    type: 'UPDATE_CATEGORY',
    payload: {
      id,
      text,
    },
  }
}

export function deleteCategory(id) {
  //AFTER SERVER
  return { type: 'DELETE_CATEGORY', payload: id}
}
