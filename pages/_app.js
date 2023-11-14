import Layout from "../src/Components/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "../src/Components/context/CartContextProvider";
import ProductsContextProvider from "../src/Components/context/ProductsContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Head from "next/head";

//Loader
import "nprogress/nprogress.css";
import Router from "next/router";
import NProgress from "nprogress";
// ******* Loader
Router.events.on("routeChangeStart", () => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});
Router.events.on("routeChangeError", () => {
  NProgress.done();
});
// ****** End Loader

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Digi Market</title>
        <meta name="description" content="َApp" />
        <meta property="og:title" content="Digital market" />
        <meta
          property="og:description"
          content=" digital center - buy in market"
        />
        <meta name="description" content="digital center - buy in market " />
        <meta
          name="keywords"
          content="digital,market, digitalmarket, reactjs,nextjs,online shop,online shopping,online store, store,digital store, website,ali kameli,alikameli, ali kameli project, online shopping digital market"
        />
        <link rel="shortcut icon" href="/favicon.ico" />,
        <meta property="og:url" content="https://www.dg-market.coode.ir" />
        <meta property="og:locale" content="fa_IR" />
        <meta property="og:site_name" content="Digi Market" />
        <meta name="twitter:creator" content="Ali Kameli" />
        <meta name="twitter:site" content="@alikameli" />
        <meta charset="utf-8" />
        <meta name="language" content="fa" />
        <meta property="og:site_name" content="dg-market.coode.ir" />
        <meta
          property="business:contact_data:website"
          content="https://www.dg-market.coode.ir"
        />
        <meta
          property="business:contact_data:phone_number"
          content="+9809385109370"
        />
        <meta property="business:contact_data:country_name" content="ایران" />
        <meta property="place:location:latitude" content="36.52358548603708" />
        <meta property="place:location:longitude" content="53.01186366861107" />
        <meta name="application-name" content="Digi Market" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="apple-mobile-web-app-title" content="niavaransari" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta property="og:type" content="programming, business" />
        <meta name="twitter:title" content="Digi Market" />
        <meta name="twitter:description" content="Digi Market" />
        <link rel="canonical" href="https://www.dg-market.coode.ir"></link>
      </Head>
      <div className="container">
        <ProductsContextProvider>
          <CartContextProvider>
            <ToastContainer />
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </CartContextProvider>
        </ProductsContextProvider>
      </div>
    </>
  );
};

export default App;
