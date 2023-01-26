import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { CartContext } from "./context/CartContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser, faMultiply } from '@fortawesome/free-solid-svg-icons'
import style from "./Navbar.module.css";
import { Data } from "../Api/Data";

const NavbarSection = () => {
    const { state } = useContext(CartContext);
    const [search, setSearch] = useState("");
    // const { search, searchHandler } = useContext(SearchContext);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    };

    const searchProducts = Data.getProducts().filter((product) =>
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
    );

    return (
        <div>
            <nav className={`navbar justify-content-between px-3`}>
                <a className={`navbar-brand ${style.navbar_brand}`}>
                    <Link
                        className={style.navbar_logo}
                        href="/"
                    >
                        <Image
                            src='/assets/logo.png'
                            alt='logo'
                            width={110}
                            height={21}
                        />
                    </Link>
                </a>
                <form className={`form-inline ${style.form_inline}`}>
                    <span className={style.search}>

                        <FontAwesomeIcon icon={faMultiply} onClick={() => setSearch('')} className={style.icon_multiple} />
                        <input
                            type="text"
                            className={`form-control ${style.navbar_input}`}
                            placeholder="search on market"
                            value={search}
                            onChange={searchHandler}
                        />
                        {
                            search &&
                            <div className={style.search_product}>
                                {searchProducts.map(product => (
                                    <div>
                                        <div>
                                            <Link href={`/${product.id}`} passHref>
                                                <span>
                                                    <Image src={product.image} alt={product.title} width={64} height={64} />
                                                    {product.title}
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                    </span>
                    <ul className={`mt-1 ${style.ul_login}`}>
                        <span>
                            <FontAwesomeIcon icon={faUser} className={style.fa_user_navbar} />
                        </span>
                        <div className={style.login}>
                            <Link
                                activeStyle={{ color: "skyblue" }}
                                className={`nav-link px-1 ${style.login_navbar}`}
                                href="/login"
                            >
                                Login
                            </Link>
                        </div>
                    </ul>
                    <Link href="/cart">
                        <span className={style.cart_navbar}>
                            <FontAwesomeIcon icon={faBasketShopping} className={style.shopping_cart_navbar} />
                            <p className={style.counter}>{state.itemsCounter}</p>
                        </span>
                    </Link>
                </form>
            </nav>

        </div>
    );
};

export default NavbarSection;
