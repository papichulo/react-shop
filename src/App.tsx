import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductList from "./components/ProductList/ProductList";
import About from "./components/views/About";
import Contact from "./components/views/Contact";
import Home from "./components/views/Home";
import ProductProvider from "./context/ProductProvider";

function App() {
  return (
    <>
      <ProductProvider>
        <Header />
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetails />} />
            </Routes>
          </div>{" "}
        </div>
      </ProductProvider>
    </>
  );
}

export default App;
