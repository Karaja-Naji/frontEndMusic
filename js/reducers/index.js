import {combineReducers} from "redux";

import { homeReducer } from './reducers';
import { blogReducer } from './blogReducer';



// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    homeReducer,
    blogReducer
});

export default rootReducer