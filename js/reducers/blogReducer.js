/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import { GET_BLOGS, SET_ERROR_MESSAGE } from '../constants/AppConstants';
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require('object.assign');
import auth from '../utils/auth';

// The initial application state
const initialState = [{
  auther:"",
  content:"",
  title
}];

// Takes care of changing the application state
export function blogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BLOGS:
      return assign({}, state, {});
      break;
    default:
      return state;
  }
}
