import { ADDTOCART } from "./actionTypes";
import initialState from "./initialState";

const addToCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      const isExists = state.find(
        (product) => product.id === action.payload.id
      );
      const remainingPrdouct = state.filter(
        (product) => product.id !== action.payload.id
      );

      if (isExists) {
        return [
          ...remainingPrdouct,
          {
            ...isExists,
            stock: isExists.stock - 1,
            quantity: isExists.quantity + 1,
          },
        ];
      }
      return [
        ...state,
        {
          ...action.payload,
          stock: action.payload.stock - 1,
          quantity: 1,
        },
      ];
    default:
      return state;
  }
};

export default addToCartReducer;
