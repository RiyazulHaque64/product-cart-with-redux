import { combineReducers } from "redux";
import addProductReducer from "./addProduct/addProductReducer";
import addToCartReducer from "./addToCart/addToCartReducer";

const rootReducer = combineReducers({
  products: addProductReducer,
  cartProducts: addToCartReducer,
});

export default rootReducer;
