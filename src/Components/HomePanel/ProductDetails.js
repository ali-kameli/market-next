import React, { useContext, useEffect, useState } from "react";
// import { CartContext } from "./context/CartContextProvider";
// import "./productDetails.css";
// import shop from "./assets/addtocart.png";
import Data from "../../Api/Data";
// import { isInCart, quantityCount } from "./helpers/functions";
import ProductDetailCard from "./productDetailCard";
import { toast } from "react-toastify";
import style from "./ProductDetails.module.css";

const ProductDetails = ({ detail }) => {
  // const { state, dispatch } = useContext(CartContext);

  // const [detail, setDetails] = useState([]);

  // const id = props.match.params.id;

  // const data = () => {
  //   const response = Data.getProducts();
  //   return response[id - 1];
  // };

  // useEffect(() => {
  //   const fetchAPI = () => {
  //     setDetails(data());
  //   };

  //   fetchAPI();
  // }, []);


  return (
    <div className={`container p-3 mt-4 ${style.container_product_details}`}>
      <div className="row ">
        <div className={`col-12 col-md-4 mt-4 ${style.parrent_product_details}`}>
          <img src={detail.image} alt="product" />
        </div>
        <div className={`col-12 col-md-6 mt-3 ${style.text_product_details}`}>
          <span className={style.detail_top_info}>
            <h4><b>{detail.title}</b></h4>
            <h6 className={style.all_category_detail}>
              <span className={style.text_category_details}>Category :</span>
              <span className={style.category_product_details}>
                {" "}
                {detail.category}
              </span>
            </h6>
          </span>
          <hr />
          {
            detail.description &&
            detail.description.map((detail, index) => (
              <ProductDetailCard key={index} detail={detail} />
            ))
          }
          <hr />
        </div>
        <div className={`col-12 col-md-2 mt-5 ${style.product_detail_shopping_cart}`}>
          <div className={style.btns_details}>
            <h4 className={style.price_product_details}>
              <span className={style.detail_new_price}> ${detail.new_price}</span>
              {
                detail.old_price &&
                <del className={style.detail_old_price}> ${detail?.old_price}</del>
              }
            </h4>
            <div className={style.btn_product_detail}>
              {/* {quantityCount(state, details.id) > 1 && (
                <button
                  onClick={() => dispatch({ type: "DECREASE", payload: details })}
                  className="btn-cart-product"
                >
                  -
                </button>
              )}

              {quantityCount(state, details.id) === 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: details })
                  }
                  className="btn-cart-product"
                >
                  <i className="fa fa-trash-o"></i>
                </button>
              )}
              {quantityCount(state, details.id) > 0 && (
                <span className="counter-product">
                  {quantityCount(state, details.id)}
                </span>
              )}

              {isInCart(state, details.id) ? (
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: details })}
                  className="btn-cart-product"
                >
                  +
                </button>
              ) : (
                <button
                  onClick={() => dispatch({ type: "ADD_ITEM", payload: details })}
                  className=" btn-detail-product-add"
                >
                  <img src={shop} alt="ax" />
                  <span> Add to Cart</span>
                </button>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
