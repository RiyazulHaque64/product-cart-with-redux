import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

const Home = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="w-10/12 mx-auto py-10 flex flex-col-reverse md:flex-row justify-between items-start gap-10">
      {products.length <= 0 ? (
        <div>
          <h2>No Product Available</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-5">
          {products
            .sort(
              (nextProduct, previousProduct) =>
                nextProduct.id - previousProduct.id
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      )}
      <ProductForm />
    </div>
  );
};

export default Home;
