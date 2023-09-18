import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const cartProducts = useSelector((state) => state.cartProducts);
  return (
    <table className="w-full">
      <thead className="bg-indigo-100">
        <tr>
          <th className="p-2 text-gray-600 text-left text-xs md:text-base">
            Image
          </th>
          <th className="p-2 text-gray-600 text-left border-l-2 border-gray-100 text-xs md:text-sm lg:text-base">
            Product Name
          </th>
          <th className="p-2 text-gray-600 border-l-2 border-gray-100 text-xs md:text-sm lg:text-base">
            Quantity
          </th>
          <th className="p-2 text-gray-600 border-l-2 border-gray-100 text-xs md:text-sm lg:text-base">
            Unit Price
          </th>
          <th className="p-2 text-gray-600 border-l-2 border-gray-100 text-xs md:text-sm lg:text-base">
            Total
          </th>
          <th className="p-2 text-gray-600 border-l-2 border-gray-100 text-xs md:text-sm lg:text-base">
            Cancel
          </th>
        </tr>
      </thead>
      <tbody>
        {cartProducts
          .sort(
            (nextProduct, prevProduct) =>
              nextProduct.cartId - prevProduct.cartId
          )
          .map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
      </tbody>
    </table>
  );
};

export default CartList;
