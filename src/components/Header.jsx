import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  const cartQuantity = cartProducts.reduce(
    (prevQty, product) => prevQty + product.quantity,
    0
  );

  return (
    <div className="w-full bg-indigo-500 h-16 flex items-center">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <h2 className="text-2xl font-semibold text-white">cartMaster</h2>
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li className="text-white font-medium hover:text-indigo-800 transition-all duration-200 cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="text-white font-medium cursor-pointer relative">
              <Link to="/cart">
                <span className="absolute -top-3/4 -right-3/4 bg-indigo-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartQuantity}
                </span>
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
