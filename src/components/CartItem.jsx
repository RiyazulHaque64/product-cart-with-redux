import { BsTrash3Fill } from "react-icons/bs";

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
          <p>1200</p>
        </div>
      </div>
      <div>
        <span>-</span>
        <span>2</span>
        <span>+</span>
      </div>
      <p>BDT 12000</p>
      <button>
        <BsTrash3Fill />
      </button>
    </div>
  );
};

export default CartItem;
