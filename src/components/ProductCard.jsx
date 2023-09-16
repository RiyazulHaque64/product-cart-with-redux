const ProductCard = () => {
  return (
    <div className="border">
      <img
        className="h-64 mx-auto"
        src="https://www.startech.com.bd/image/cache/catalog/laptop/acer/travelmate-tmb-311-31-c3cd/travelmate-tmb-311-31-c3cd-01-500x500.jpg"
        alt=""
      />
      <div className="p-8">
        <h2 className="font-medium mb-2">
          Acer TravelMate Celeron N4020 11.6 HD Laptop
        </h2>

        <div className="flex justify-between mb-2">
          <p className="text-sm">
            <span>Category: </span>Laptop
          </p>
          <p className="text-sm">
            <span>Stock: </span>20
          </p>
        </div>
        <p className="mb-2 text-center font-bold text-lg text-indigo-500">
          $1200
        </p>
      </div>
      <button className="bg-gray-300 w-full py-1 text-indigo-500 font-semibold hover:text-indigo-600 transition-all duration-200">
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
