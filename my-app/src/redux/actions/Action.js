import { ActionTypes } from "../contants/action-types";

export const Product = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const removeProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: product,
  };
};

export const AddCart = (product) => {
  return {
    type: ActionTypes.ADD_CART,
    payload: product,
  };
};
