import Layout from "../src/Components/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "../src/Components/context/CartContextProvider";
import ProductsContextProvider from "../src/Components/context/ProductsContextProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = ({ Component, pageProps }) => {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <ToastContainer />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider >
    </ProductsContextProvider>
  );
}

export default App;