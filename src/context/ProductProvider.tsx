import {createContext, PropsWithChildren, useState} from "react";
import {Product} from "../models/models.ts";


export const ProductContext = createContext<{
  products?: Product[],
  cartProducts?: Product[],
  searchProducts?: (condition: string) => void,
  addToCart?: (product: Product) => void
}>({});

const ProductProvider = ({ children }: PropsWithChildren) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const searchProducts = (condition: string) => {
    const products = [
      { id: 1, data: { name: "iPhone", description: "An iPhone" } },
      { id: 2, data: { name: "Samsung", description: "A Samsung" } },
    ];
    const filteredProducts = products.filter((x) =>
      x.data.name.includes(condition)
    );
    setProducts(filteredProducts);
  };

  const addToCart = (product: Product) => {
    setCartProducts([...cartProducts, product]);
  };
  return (
    <ProductContext.Provider
      value={{ products, cartProducts, searchProducts, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
