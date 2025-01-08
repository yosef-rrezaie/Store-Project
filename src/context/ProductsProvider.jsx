import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, SetProducts] = useState([]);
  useEffect(() => {
    try {
      api.get("/products").then((res) => {
        SetProducts(res);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  console.log(products);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

const useProducts = () => {
  return useContext(ProductContext);
};

export default ProductsProvider;
export {useProducts}
