import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect } from "react";
import Ticker from "react-ticker";
// import { CartContext } from "./../context/CartContextProvider";
import style from "./Navbar.module.css";


const NavbarSection = ({ search, searchHandler }) => {
    // const { state } = useContext(CartContext);
    // const { search, searchHandler } = useContext(SearchContext);

    return (
        <div>

            {/* News ticker slider */}
            {/* <Ticker offset="run-in" speed={10}>
                {() => (
                   ( <div>sss</div>)
                )
                }
            </Ticker> */}
            {/*  Navbar */}
            <nav className={`navbar justify-content-between px-3`}>
                <a className={`navbar-brand ${style.navbar_brand}`}>
                    <Link
                        className={style.navbar_logo}
                        href="/products"
                    >
                        <Image
                            src='/assets/logo.png'
                            alt='logo'
                            width={120}
                            height={120}
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
                            <i className={`fa fa-user-o ${style.fa_user_navbar}`}></i>
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
                                <i className={`fa fa-shopping-cart ${style.shopping_cart_navbar}`}></i>
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
