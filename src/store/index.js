import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { ProductReducer, CategoryReducer, authReducer } from "./reducer/index";
const rootReducer = combineReducers({
  products: ProductReducer,
  category: CategoryReducer,
  auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
