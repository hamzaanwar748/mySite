import { combineReducers } from "redux";
import { AddCartReducer, ProductReducer } from "./ProductReducer";

export const reducers = combineReducers({
  allProducts: ProductReducer,
  AddCartProduct: AddCartReducer,
});
