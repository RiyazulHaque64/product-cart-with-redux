import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  deleteToCart,
  qtyDecrease,
  qtyIncrease,
} from "../redux/addToCart/actions";
import { decreaseStock, increaseStock } from "../redux/addProduct/actions";

const CartItem = ({ product }) => {
  const { id, cartId, name, imgUrl, price, stock, quantity, totalPrice } =
    product;
  const dispatch = useDispatch();

  const qtyDecreaseHandler = (productId) => {
    dispatch(qtyDecrease(productId));
    dispatch(increaseStock(productId, 1));
  };

  const qtyIncreaseHandler = (productId) => {
    dispatch(qtyIncrease(productId));
    dispatch(decreaseStock(productId));
  };

  const deleteToCartHandler = (cartProductId, productId, cartProductQty) => {
    dispatch(deleteToCart(cartProductId));
    dispatch(increaseStock(productId, cartProductQty));
  };

  return (
    <tr>
      <td className="px-2 py-1">
        <img
          className="w-10 h-10 md:w-12 md:h-12 lg:w-[70px] lg:h-[70px] xl:w-20 xl:h-20 mx-auto"
          src={imgUrl}
          alt=""
        />
      </td>
      <td className="px-2 py-1 text-sm lg:text-base">{name}</td>
      <td className="px-2 py-1 text-center font-semibold">
        <button
          className={`text-base md:text-lg lg:text-xl ${
            quantity <= 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => qtyDecreaseHandler(id)}
          disabled={quantity <= 0 ? true : false}
        >
          -
        </button>
        <span className="px-1 lg:px-4 text-xs md:text-sm lg:text-base">
          {quantity}
        </span>
        <button
          className={`text-base md:text-lg lg:text-xl ${
            stock <= 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={() => qtyIncreaseHandler(id)}
          disabled={stock <= 0 ? true : false}
        >
          +
        </button>
      </td>
      <td className="px-2 py-1 text-center font-semibold text-sm lg:text-base">
        {price}
        <span className="font-extrabold">৳</span>
      </td>
      <td className="px-2 py-1 text-center font-semibold text-sm lg:text-base">
        {totalPrice}
        <span className="font-extrabold">৳</span>
      </td>
      <td className="px-2 py-1">
        <FaXmark
          className="mx-auto cursor-pointer transition-transform duration-300 hover:scale-125"
          onClick={() => deleteToCartHandler(cartId, id, quantity)}
        />
      </td>
    </tr>
  );
};

export default CartItem;
