import BillDetails from "../components/BillDetails";
import CartItem2 from "../components/CartItem2";

const Cart = () => {
  return (
    <div className="w-10/12 mx-auto py-10 flex justify-between items-start gap-10">
      <div className="w-8/12">
        <CartItem2 />
      </div>
      <div className="border pb-6 w-4/12">
        <BillDetails />
      </div>
    </div>
  );
};

export default Cart;
