import Layout from "../src/Components/Layout";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";


const App = ({ Component, pageProps }) => {
  
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;