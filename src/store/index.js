import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  ProductReducer,
  CategoryReducer,
  authReducer,
  AddLandscapeReducer,
} from "./reducer/index";
const rootReducer = combineReducers({
  products: ProductReducer,
  category: CategoryReducer,
  auth: authReducer,
  addLandscape: AddLandscapeReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
