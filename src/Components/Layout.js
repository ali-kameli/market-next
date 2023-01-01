import Footer from "./Footer";
import NavbarSection from "./Navbar";

const Layout = ({children}) => {
    return ( 
        <>
        <NavbarSection />
        {children}
        <Footer/>
        </>
     );
}
 
export default Layout;