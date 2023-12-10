import Footer from "./Footer";
import NavbarSection from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      {/* <NavbarSection /> */}
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
