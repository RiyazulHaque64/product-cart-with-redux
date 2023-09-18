import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/addProduct/actions";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const dispatch = useDispatch();

  const productInfoHandler = (e) => {
    e.preventDefault();
    const productInfo = {
      name,
      category,
      imgUrl,
      price: parseFloat(price),
      stock: parseInt(stock),
    };
    dispatch(addProduct(productInfo));
  };

  return (
    <div className="w-full md:w-1/2 lg:w-5/12 shadow-lg">
      <h2 className="text-center font-semibold bg-indigo-100 text-gray-600 p-2">
        Add New Product
      </h2>
      <form className="p-8" onSubmit={productInfoHandler}>
        <div className="mb-2">
          <label className="text-sm text-gray-700 font-medium" htmlFor="">
            Product Name
          </label>
          <input
            className="w-full border px-2 py-1 text-sm"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-700 font-medium" htmlFor="">
            Category
          </label>
          <input
            className="w-full border px-2 py-1 text-sm"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <label className="text-sm text-gray-700 font-medium" htmlFor="">
            Image URL
          </label>
          <input
            className="w-full border px-2 py-1 text-sm"
            type="text"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
            required
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
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="text-sm text-gray-700 font-medium" htmlFor="">
              Quantity
            </label>
            <input
              className="w-full border px-2 py-1 text-sm"
              type="text"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <input
            className="bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-500 cursor-pointer hover:text-indigo-600 transition-all duration-200"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
