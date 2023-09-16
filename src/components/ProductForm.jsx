const ProductForm = () => {
  return (
    <div className="w-5/12 shadow-lg">
      <h2 className="text-center font-semibold bg-gray-300 text-gray-600 p-2">
        Add New Product
      </h2>
      <form className="p-8" action="">
        <div className="mb-2">
          <label className="text-sm text-gray-700 font-medium" htmlFor="">
            Product Name
          </label>
          <input
            className="w-full border px-2 py-1 text-sm"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-700 font-medium" htmlFor="">
            Category
          </label>
          <input
            className="w-full border px-2 py-1 text-sm"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-700 font-medium" htmlFor="">
            Image URL
          </label>
          <input
            className="w-full border px-2 py-1 text-sm"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="mb-2 flex gap-4">
          <div>
            <label className="text-sm text-gray-700 font-medium" htmlFor="">
              Price
            </label>
            <input
              className="w-full border px-2 py-1 text-sm"
              type="text"
              name=""
              id=""
            />
          </div>
          <div className="mb-2">
            <label className="text-sm text-gray-700 font-medium" htmlFor="">
              Quantity
            </label>
            <input
              className="w-full border px-2 py-1 text-sm"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>
        <div className="flex justify-end">
          <input
            className="bg-gray-300 px-4 py-1 rounded text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-400 transition-all duration-200"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
