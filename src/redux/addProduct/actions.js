import { ADDPRODUCT, DECREASESTOCK, INCREASESTOCK } from "./actionTypes";

export const addProduct = (product) => {
  return {
    type: ADDPRODUCT,
    payload: product,
  };
};

export const decreaseStock = (productId) => {
  return {
    type: DECREASESTOCK,
    payload: productId,
  };
};

export const increaseStock = (productId, quantity) => {
  return {
    type: INCREASESTOCK,
    payload: {
      productId,
      quantity,
    },
  };
};
