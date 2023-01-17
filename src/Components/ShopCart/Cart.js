import React, { useContext } from "react";
import { shorten } from "./../helpers/functions";
import { CartContext } from "./../context/CartContextProvider";
import style from "./Cart.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);

  const { image, title, new_price, quantity } = props.data;

  return (
    <div className={style.cart_basket_container}>
      <Image width={120} height={115} src={image} alt="product" className={style.productImage} />
      <div className={style.data}>
        {/* <h6>{shorten(title)}</h6> */}
        <h6>{title}</h6>
        <div className={style.buttonContainer_cart}>
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            +
          </button>
          <span className={style.quantity}>{quantity}</span>
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <FontAwesomeIcon icon={faTrashAlt} />

            </button>
          )}
        </div>
      </div>
      <p className={style.price_cart_shop}>{new_price} $</p>
    </div>
  );
};

export default Cart;
