import { FaXmark } from "react-icons/fa6";

const CartItem = () => {
  return (
    <div className="flex justify-between items-center border w-full">
      <div className="flex items-center gap-4">
        <img
          className="w-20 h-20"
          src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/travelmate-tmb-311-31-c3cd/travelmate-tmb-311-31-c3cd-01-500x500.jpg"
          alt=""
        />
        <div>
          <h2>Name</h2>
          <p>Category</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <div>
          <span>-</span>
          <span className="mx-3">2</span>
          <span>+</span>
        </div>
        <p>
          <p>1200</p>
        </p>
        <p>BDT 12000</p>
        <button>
          <FaXmark />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
