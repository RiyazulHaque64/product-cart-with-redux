import { ADDPRODUCT, DECREASESTOCK } from "./actionTypes";

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
