import {
  ADDTOCART,
  CLEARCART,
  DELETETOCART,
  QTYDECREASE,
  QTYINCREASE,
} from "./actionTypes";
import initialState from "./initialState";

const cartIdGenerator = (state) => {
  const maxId = state.reduce(
    (prevId, product) => Math.max(prevId, product.cartId),
    -1
  );
  return maxId + 1;
};

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const isExists = state.find(
        (product) => product.id === action.payload.id
      );
      const remainingProduct = state.filter(
        (product) => product.id !== action.payload.id
      );

      if (isExists) {
        return [
          ...remainingProduct,
          {
            ...isExists,
            stock: isExists.stock - 1,
            quantity: isExists.quantity + 1,
            totalPrice: isExists.price + isExists.quantity * isExists.price,
          },
        ];
      }
      return [
        ...state,
        {
          ...action.payload,
          cartId: cartIdGenerator(state),
          stock: action.payload.stock - 1,
          quantity: 1,
          totalPrice: action.payload.price,
        },
      ];
    case QTYINCREASE:
      const cartProduct = state.find(
        (product) => product.id === action.payload
      );
      const remainingProductAfterQtyIncrease = state.filter(
        (product) => product.id !== action.payload
      );
      return [
        ...remainingProductAfterQtyIncrease,
        {
          ...cartProduct,
          stock: cartProduct.stock - 1,
          quantity: cartProduct.quantity + 1,
          totalPrice:
            cartProduct.price + cartProduct.quantity * cartProduct.price,
        },
      ];
    case QTYDECREASE:
      const targetProduct = state.find(
        (product) => product.id === action.payload
      );
      const remainingProductAfterQtyDecrease = state.filter(
        (product) => product.id !== action.payload
      );
      return [
        ...remainingProductAfterQtyDecrease,
        {
          ...targetProduct,
          stock: targetProduct.stock + 1,
          quantity: targetProduct.quantity - 1,
          totalPrice:
            targetProduct.quantity * targetProduct.price - targetProduct.price,
        },
      ];
    case DELETETOCART:
      return state.filter((product) => product.cartId !== action.payload);
    case CLEARCART:
      return [];
    default:
      return state;
  }
};

export default addToCartReducer;
