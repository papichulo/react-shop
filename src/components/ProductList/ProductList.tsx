import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";
import ProductCard from "../ProductCard/ProductCard";

const ProductList = () => {
  const { products } = useContext(ProductContext);

  const productItems = products.map((product) => {
    return (
      <ProductCard key={product.id} id={product.id} product={product.data} />
    );
  });

  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">
        Products
      </h1>
      <div className="grid grid-cols-4 gap-4">{productItems}</div>
    </div>
  );
};

export default ProductList;
