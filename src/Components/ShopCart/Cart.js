import React, { useContext } from "react";
import { shorten } from "./../helpers/functions";
import { CartContext } from "./../context/CartContextProvider";
import "./Cart.css";
import Image from "next/image";

const Cart = (props) => {
  const { dispatch } = useContext(CartContext);

  const { image, title, new_price, quantity } = props.data;


  return (
    <div className=" cart-basket-container ">
      <Image width={50} height={50} src={image} alt="product" className="productImage " />
      <div className="data">
        {/* <h6>{shorten(title)}</h6> */}
        <h6>{title}</h6>
        <div className="buttonContainer-cart">
          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            +
          </button>
          <span className="quantity">{quantity}</span>
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
              <i className="fa fa-trash"></i>
            </button>
          )}
        </div>
      </div>
      <p className="price-cart-shop">{new_price} $</p>
    </div>
  );
};

export default Cart;
