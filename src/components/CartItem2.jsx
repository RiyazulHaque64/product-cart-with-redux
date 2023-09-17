import { FaXmark } from "react-icons/fa6";

const CartItem2 = () => {
  return (
    <table className="w-full">
      <thead className="bg-indigo-100">
        <tr>
          <th className="p-2 text-gray-600 text-left">Image</th>
          <th className="p-2 text-gray-600 text-left border-l-2 border-gray-100">
            Product Name
          </th>
          <th className="p-2 text-gray-600 border-l-2 border-gray-100">
            Quantity
          </th>
          <th className="p-2 text-gray-600 border-l-2 border-gray-100">
            Unit Price
          </th>
          <th className="p-2 text-gray-600 border-l-2 border-gray-100">
            Total
          </th>
          <th className="p-2 text-gray-600 border-l-2 border-gray-100">
            Cancel
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-2 py-1">
            <img
              className="w-20 h-20"
              src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/travelmate-tmb-311-31-c3cd/travelmate-tmb-311-31-c3cd-01-500x500.jpg"
              alt=""
            />
          </td>
          <td className="px-2 py-1">Name</td>
          <td className="px-2 py-1 text-center font-semibold">
            <span className="text-xl cursor-pointer">-</span>
            <span className="px-4">2</span>
            <span className="text-xl cursor-pointer">+</span>
          </td>
          <td className="px-2 py-1 text-center font-semibold">
            1200<span className="font-extrabold">৳</span>
          </td>
          <td className="px-2 py-1 text-center font-semibold">
            1200<span className="font-extrabold">৳</span>
          </td>
          <td className="px-2 py-1">
            <FaXmark className="mx-auto cursor-pointer transition-transform duration-300 hover:scale-125" />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default CartItem2;
