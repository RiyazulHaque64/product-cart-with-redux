import { ADDPRODUCT, DECREASESTOCK } from "./actionTypes";
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
          ...remainingPrdouct,
          {
            ...isExists,
            stock: isExists.stock - 1,
          },
        ];
      }
      return [...state];

    default:
      return state;
  }
};

export default addProductReducer;
