import ProductCard from "../components/ProductCard";
import ProductForm from "../components/ProductForm";

const Home = () => {
  return (
    <div className="w-10/12 mx-auto py-10 flex justify-between items-start gap-10">
      <div className="grid grid-cols-3 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
      <ProductForm />
    </div>
  );
};

export default Home;
