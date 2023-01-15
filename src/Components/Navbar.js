import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import Ticker from "react-ticker";
// import { CartContext } from "./../context/CartContextProvider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import style from "./Navbar.module.css";

const NavbarSection = ({ search, searchHandler }) => {
    // const { state } = useContext(CartContext);
    // const { search, searchHandler } = useContext(SearchContext);

    return (
        <div>
            <nav className={`navbar justify-content-between px-3`}>
                <a className={`navbar-brand ${style.navbar_brand}`}>
                    <Link
                        className={style.navbar_logo}
                        href="/products"
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
                    <input
                        type="text"
                        className={`form-control ${style.navbar_input}`}
                        placeholder="search on market"
                        value={search}
                        onChange={searchHandler}
                    />
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
                    <span className={style.cart_navbar}>
                        <Link href="/cart">
                            <>
                                <FontAwesomeIcon icon={faBasketShopping} className={style.shopping_cart_navbar} />
                                {/* <p className={style.counter}>{state.itemsCounter}</p> */}
                            </>
                        </Link>
                    </span>
                </form>
            </nav>

        </div>
    );
};

export default NavbarSection;
