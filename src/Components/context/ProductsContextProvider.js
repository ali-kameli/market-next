import React, { createContext, useEffect, useState } from "react";
import Data from "../../Api/Data";

export const ProductContext = createContext();

const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Data.getProducts());
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductsContextProvider;
