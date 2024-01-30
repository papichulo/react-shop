import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../../context/ProductProvider";

const ProductDetails = () => {
  const location = useLocation();
  const product = location.state.product;
  const { addToCart } = useContext(ProductContext);

  const handleAddToCart = () => {
    addToCart(product);
  };
  return (
    <div>
      <h1 className="text-4xl font-extrabold tracking-tight text-center text-white sm:text-5xl lg:text-6xl">
        {product.name}
      </h1>
      <p>{product.description}</p>
      <button
        type="submit"
        onClick={handleAddToCart}
        className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
