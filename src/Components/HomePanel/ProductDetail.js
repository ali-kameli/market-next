import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContextProvider"; 
import Data from "../../Api/Data";
import { isInCart, quantityCount } from "../helpers/functions";
import ProductDetailCard from "./ProductDetailCard";
import { toast } from "react-toastify";
import Image from "next/image";
import style from "./ProductDetail.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";

const ProductDetails = ({ detail }) => {
  const { state, dispatch } = useContext(CartContext);
  // const [detail, setDetails] = useState([]); 

  return (
    <div className={`container p-3 mt-4 ${style.container_product_details}`}>
      <div className="row ">
        <div className={`col-12 col-md-4 mt-4 ${style.parrent_product_details}`}>
          <Image width={295} height={311} src={detail.image} alt="product" />
        </div>
        <div className={`col-12 col-md-6 mt-3 ${style.text_product_details}`}>
          <span className={style.detail_top_info}>
            <h4>
              <b>{detail.title}</b>
              <Rating name="read-only" value={detail.rate} readOnly />
            </h4>
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
              {quantityCount(state, detail.id) > 1 && (
                <button
                  onClick={() => dispatch({ type: "DECREASE", payload: detail })}
                  className={style.btn_cart_product}
                >
                  -
                </button>
              )}

              {quantityCount(state, detail.id) === 1 && (
                <button
                  onClick={() =>
                    dispatch({ type: "REMOVE_ITEM", payload: detail })
                  }
                  className={style.btn_cart_product}
                >
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              )}
              {quantityCount(state, detail.id) > 0 && (
                <span className={style.counter_product}>
                  {quantityCount(state, detail.id)}
                </span>
              )}

              {isInCart(state, detail.id) ? (
                <button
                  onClick={() => dispatch({ type: "INCREASE", payload: detail })}
                  className={style.btn_cart_product}
                >
                  +
                </button>
              ) : (
                <button
                  onClick={() => dispatch({ type: "ADD_ITEM", payload: detail })}
                  className={style.btn_detail_product_add}
                >
                  <FontAwesomeIcon icon={faCartArrowDown} />

                  <span> Add to Cart</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
