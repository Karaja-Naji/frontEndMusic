import {combineReducers} from "redux";

import { homeReducer } from './reducers';
import { blogReducer } from './blogReducer';
import { productReducer } from './productReducer';
import { categoryReducer } from './categoryReducer';



// Use ES6 object literal shorthand syntax to define the object shape
const rootReducer = combineReducers({
    homeReducer,
    blogReducer,
    productReducer,
    categoryReducer
});

export default rootReducer