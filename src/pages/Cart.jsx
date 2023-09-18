import { useSelector } from "react-redux";
import BillDetails from "../components/BillDetails";
import CartList from "../components/CartList";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  return (
    <div className="w-10/12 mx-auto py-10 flex flex-col md:flex-row justify-between items-start gap-10 md:gap-5 lg:gap-10">
      <div className="w-full md:w-8/12">
        {cartProducts.length === 0 ? <h2>No Item Added</h2> : <CartList />}
      </div>
      <div className="border pb-6 w-full md:w-4/12">
        <BillDetails />
      </div>
    </div>
  );
};

export default Cart;
