import CartItem from "../components/CartItem";

const Cart = () => {
  return (
    <div className="w-10/12 mx-auto py-10 flex justify-between items-start gap-10">
      <div className="w-full">
        <CartItem />
      </div>
      <div className="border pb-6">
        <h2 className="text-center font-semibold bg-gray-300 text-gray-600 p-2">
          Bill Details
        </h2>
        <div className="p-6">
          <table>
            <tr>
              <td className="pr-12">Sub Total</td>
              <td className="text-right">12000</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td className="text-right">0.00</td>
            </tr>
            <tr>
              <td>VAT</td>
              <td className="text-right">0.00</td>
            </tr>
            <tr>
              <td className="font-semibold">Total</td>
              <td className="text-right font-semibold">12000</td>
            </tr>
          </table>
        </div>
        <div className="flex justify-center">
          <button className="bg-gray-300 px-4 py-1 text-indigo-500 font-semibold hover:text-indigo-600 transition-all duration-200">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
