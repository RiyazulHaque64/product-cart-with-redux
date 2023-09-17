import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

const Home = () => {
  const products = useSelector((state) => state.products);
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log(cartProducts);
  return (
    <div className="w-10/12 mx-auto py-10 flex justify-between items-start gap-10">
      {products.length <= 0 ? (
        <div>
          <h2>No Product Available</h2>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <ProductForm />
    </div>
  );
};

export default Home;
