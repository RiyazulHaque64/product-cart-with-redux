import { useDispatch } from "react-redux";
import { addToCart } from "../redux/addToCart/actions";
import { decreaseStock } from "../redux/addProduct/actions";

const ProductCard = ({ product }) => {
  const { name, category, imgUrl, price, stock } = product;
  const dispatch = useDispatch();

  const addToCartHandler = (productInfo) => {
    console.log(productInfo.id);
    dispatch(decreaseStock(productInfo.id));
    dispatch(addToCart(productInfo));
  };

  return (
    <div className="border rounded">
      <img className="h-64 sm:h-48 lg:h-40 mx-auto" src={imgUrl} alt="" />
      <div className="p-8">
        <h2 className="font-medium mb-2">{name}</h2>

        <div className="flex justify-between mb-2">
          <p className="text-sm">
            <span>Category: </span>
            {category}
          </p>
          <p className="text-sm">
            <span>Stock: </span>
            {stock}
          </p>
        </div>
        <p className="mb-2 text-center font-bold text-lg text-indigo-500">
          ${price}
        </p>
      </div>
      <button
        className={`bg-indigo-100 w-full py-1 text-indigo-500 font-semibold hover:text-indigo-600 transition-all duration-200 ${
          stock <= 0 ? "cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => addToCartHandler(product)}
        disabled={stock <= 0 ? true : false}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
