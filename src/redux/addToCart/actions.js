import {
  ADDTOCART,
  CLEARCART,
  DELETETOCART,
  QTYDECREASE,
  QTYINCREASE,
} from "./actionTypes";

export const addToCart = (product) => {
  return {
    type: ADDTOCART,
    payload: product,
  };
};

export const qtyIncrease = (productId) => {
  return {
    type: QTYINCREASE,
    payload: productId,
  };
};

export const qtyDecrease = (productId) => {
  return {
    type: QTYDECREASE,
    payload: productId,
  };
};

export const deleteToCart = (productId) => {
  return {
    type: DELETETOCART,
    payload: productId,
  };
};

export const clearCart = () => {
  return {
    type: CLEARCART,
  };
};
