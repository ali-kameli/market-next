import React, { createContext, useEffect, useState } from "react";
import { getProduct } from "../api";

export const ProductContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      // setProducts(await getProduct());
      setProducts(await getProduct);
    };
    fetchAPI();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
