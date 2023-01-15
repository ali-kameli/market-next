import React, { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { isInCart, quantityCount } from "../../helpers/functions";
// import shop from "../../assets/addtocart.png";
import style from "./OffProduct.module.css"
import Link from "next/link";

const OffProduct = ({ productData }) => {
  // const { state, dispatch } = useContext(CartContext);

  return (
    <div className={` ${style.product_cart} mr-2 my-3 pt-4 pb-1`}>
      <Link href={`/products/${productData.id}`} className={style.link_product} passHref>
        <div className={style.off_product}>
          <img src={productData.image} alt="product" className="p-3 mb-4" />
          <p style={{ fontSize: "smaller", height: "5rem" }}>
            {productData.title}
          </p>
        </div>
      </Link>
      <div className={style.product_btns}>
        {/* {quantityCount(state, productData.id) > 1 && (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: productData })}
            className={style.btn_cart_product}
          >
            -
          </button>
        )}

        {quantityCount(state, productData.id) === 1 && (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: productData })
            }
            className={style.btn_cart_product}
          >
            <i className="fa fa-trash-o"></i>
          </button>
        )}
        {quantityCount(state, productData.id) > 0 && (
          <span className={style.counter_product}>
            {quantityCount(state, productData.id)}
          </span>
        )}

        {isInCart(state, productData.id) ? (
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: productData })}
            className={style.btn_cart_product}
          >
            +
          </button>
        ) : (
          <button
            onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
            className={style.btn_cart_product_add}
          >
            <i className="fa fa-cart-arrow-down"></i>

          </button>
        )} */}

        <h6>
          $ {productData.new_price}
        </h6>
      </div>
    </div>
  );
};

export default OffProduct;
