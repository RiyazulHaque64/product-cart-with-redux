import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full bg-indigo-400 h-16 flex items-center">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white">cartMaster</h2>
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li className="text-white font-medium hover:text-indigo-800 transition-all duration-200 cursor-pointer">
              Home
            </li>
            <li className="text-white font-medium cursor-pointer relative">
              <span className="absolute -top-3/4 -right-3/4 bg-indigo-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
              <FaShoppingCart />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
