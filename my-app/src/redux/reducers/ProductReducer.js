import { ActionTypes } from "../contants/action-types";

const intialState = {
  product: [],
  cart: [],
};

export const ProductReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, product: payload };

    default:
      return state;
  }
};

export const AddCartReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case "ADD_CART":
      let exist = state.cart.find((i) => i.id == payload.id);
      if (!exist) {
        state.cart.push({ ...payload, quantity: 0 });
      } else {
        state.cart = state.cart.map((product) => {
          if (product.id == exist.id) product.quantity++;
          return product;
        });
      }
      return { ...state };
    case "REMOVE_PRODUCT":
      const UpdatedProduct = state.cart.filter((elem) => elem.id !== payload);
      return { ...state, cart: UpdatedProduct };
    default:
      return state;
  }
};
