const Header = () => {
  return (
    <div className="w-full bg-indigo-400 h-20 flex items-center">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-white">cartMaster</h2>
        </div>
        <nav>
          <ul className="flex items-center gap-4">
            <li className="text-white font-medium hover:text-indigo-800 transition-all duration-200 cursor-pointer">
              Home
            </li>
            <li className="text-white font-medium hover:text-indigo-800 transition-all duration-200 cursor-pointer">
              Cart
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
