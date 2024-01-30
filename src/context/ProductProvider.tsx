import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  const searchProducts = (condition) => {
    const products = [
      { id: 1, data: { name: "iPhone", description: "An iPhone" } },
      { id: 2, data: { name: "Samsung", description: "A Samsung" } },
    ];
    const filteredProducts = products.filter((x) =>
      x.data.name.includes(condition)
    );
    setProducts(filteredProducts);
  };

  const addToCart = (product) => {
    setCartProducts([...cartProducts, product]);
  };
  return (
    <ProductContext.Provider
      value={{ products, cartProducts, searchProducts, addToCart }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
