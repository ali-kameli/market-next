import Image from "next/image";
import React, { Fragment, useContext, useState } from "react";
import { ProductContext } from "./../context/ProductsContextProvider";
// import Navbar from "../Navbar/Navbar";
// import Landing from "../Landing/Landing";
import { Dropdown } from "react-bootstrap";
import { Data } from "../../Api/Data";
import Product from "./Product";
import style from "./Store.module.css";


const Store = (props) => {
    const products = useContext(ProductContext);
    // const search = useContext(SearchContext);

    const [search, setSearch] = useState("");
    const [activeSort, setActiveSort] = useState('');
    const [brand, setBrand] = useState('all brands');
    const [category, setCategory] = useState('all categories');

    const searchHandler = (event) => {
        setSearch(event.target.value);
    };

    const searchProducts = Data.getProducts().filter((product) =>
        product.title.toLowerCase().includes(search.toLocaleLowerCase())
    );

    // const { pathname } = props.location;
    const getChoiceSort = (e) => {
        setActiveSort(e.target.innerHTML);
    }
    return (
        <Fragment>
            {/* <NavbarSection search={search} searchHandler={searchHandler} /> */}
            {/* {pathname === "/products" ? <Landing /> : null} */}

            <div className={`container-fluid  ${style.container_store_product}`}>
                <div className="row" style={{ textAlign: "center", justifyContent: "center" }}>
                    <span className={`${style.ad_image_landing}`}>
                        <Image

                            width={760}
                            height={290}
                            src="/assets/banner/b1.jpg"
                            alt="samsung-galaxy"
                        />
                    </span>
                    <span className={`${style.ad_image_landing}`}>
                        <Image

                            width={760}
                            height={290}
                            src="/assets/banner/b2.jpg"
                            alt="samsung-galaxy"
                        />
                    </span>
                </div>
                <div
                    className="my-3 py-2"
                    id={style.stor_sort_list}
                    style={{
                        borderBottom: "3px solid #fc0046",
                        width: "100%",
                        marginRight: "2rem",
                    }}
                >
                    Sort by :
                    {
                        Data.getSort().map(sort => (
                            <span key={sort.id} >
                                {
                                    sort.title === 'brand' ?
                                        <Dropdown className="mx-3">
                                            <Dropdown.Toggle id="dropdown-basic">
                                                {brand}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                {sort.brands.map((brandProduct, index) => (
                                                    <Dropdown.Item
                                                        onClick={() => { setBrand(brandProduct.brand) }} key={index}
                                                    >
                                                        {brandProduct.brand}
                                                    </Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        :
                                        sort.title === 'category' ?
                                            <Dropdown className="mx-3">
                                                <Dropdown.Toggle id="dropdown">
                                                    {category}
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    {sort.categories.map((categoryProduct, index) => (
                                                        <Dropdown.Item
                                                            onClick={() => setCategory(categoryProduct.category)} key={index}
                                                        >
                                                            {categoryProduct.category}
                                                        </Dropdown.Item>
                                                    ))}
                                                </Dropdown.Menu>
                                            </Dropdown>
                                            :
                                            <span className="mx-3" onClick={(e) => { getChoiceSort(e) }}>{sort.title}</span>
                                }
                            </span>
                        ))
                    }
                </div>
                <div className="row" style={{ justifyContent: "center" }}>
                    {
                        brand !== "all brands" ?
                            searchProducts.filter(p => p.brand === brand).map((product) => (
                                <div className={style.store_product} key={product.id}>
                                    <Product key={product.id} productData={product} />
                                </div>
                            )) :
                            category !== "all categories" ?
                                searchProducts.filter(p => p.category === category).map((product) => (
                                    <div className={style.store_product} key={product.id}>
                                        <Product key={product.id} productData={product} />
                                    </div>
                                )) : searchProducts.map((product) => (
                                    <div className={style.store_product} key={product.id}>
                                        <Product key={product.id} productData={product} />
                                    </div>
                                ))
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Store;
