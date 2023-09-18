import { ADDPRODUCT, DECREASESTOCK, INCREASESTOCK } from "./actionTypes";
import initialState from "./initialState";

const newIdGenerator = (state) => {
  const maxId = state.reduce(
    (prevId, product) => Math.max(prevId, product.id),
    -1
  );
  return maxId + 1;
};

const addProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDPRODUCT:
      return [
        ...state,
        {
          id: newIdGenerator(state),
          ...action.payload,
        },
      ];
    case DECREASESTOCK:
      const isExists = state.find((product) => product.id === action.payload);
      const remainingPrdouct = state.filter(
        (product) => product.id !== action.payload
      );

      if (isExists) {
        return [
          {
            ...isExists,
            stock: isExists.stock - 1,
          },
          ...remainingPrdouct,
        ];
      }
      return [...state];
    case INCREASESTOCK:
      const targetProduct = state.find(
        (product) => product.id === action.payload.productId
      );
      const remainingPrdouctInIncrase = state.filter(
        (product) => product.id !== action.payload.productId
      );

      if (targetProduct) {
        return [
          {
            ...targetProduct,
            stock: targetProduct.stock + action.payload.quantity,
          },
          ...remainingPrdouctInIncrase,
        ];
      }
      return [...state];
    default:
      return state;
  }
};

export default addProductReducer;
