const BillDetails = () => {
  return (
    <div>
      <div className="text-center bg-indigo-100 p-2">
        <h2 className="font-semibold  text-gray-600">Bill Details</h2>
      </div>

      <div className="p-8">
        <table className="w-full">
          <tbody>
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
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <button className="bg-indigo-100 px-4 py-1 text-indigo-500 font-semibold hover:text-indigo-600 transition-all duration-200">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default BillDetails;
