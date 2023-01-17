import Link from "next/link";
import React, { useContext } from "react";
import { CartContext } from "./../context/CartContextProvider";
import Cart from "./Cart";
import style from "./ShopCart.module.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);

  return (
    <div className={`container-fluid pt-5 ${style.container_shopcart}`}>
      <div className={`row ${style.row}`}>
        <div className={`col-12 col-md-7  m-0 p-0 ${style.cartContainer}`}>
          {state.selectedItems.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
        </div>
        <div className="col-12 col-md-3 p-0 m-0">
          {state.itemsCounter > 0 && (
            <div className={style.payments}>
              <p className={style.much_counter_cart}>
                <span className={style.much_counter_cart}>Number of products : </span>
                {state.itemsCounter}
              </p>
              <p className={style.much_counter_cart}>
                <span className={style.much_counter_cart}>Price of products : </span>
                <span>
                  {state.total.length > 3 ? state.total.toLocaleString() : state.total} <small>$</small>
                </span>
              </p>
              <p className={style.much_counter_cart}>
                <span className={style.much_counter_cart}>Discount of products: </span>
                <span className={style.off_counter_cart}>
                  (%50) {state.total.length > 3 ? state.total.toLocaleString() : state.total} <small>$</small>
                </span>
              </p>
              <hr />
              <p className={style.basket_counter_cart}>
                <span className={style.basket_counter_cart}>Total: </span>
                <span>
                  {state.total.length > 3 ? state.total.toLocaleString() : state.total} <small>$</small>
                </span>
              </p>
              <div className={style.buttonContainer}>
                <button
                  className={style.checkout}
                  onClick={() => dispatch({ type: "CHECKOUT" })}
                >
                  Buy                </button>
                <button
                  className={style.clear}
                  onClick={() => dispatch({ type: "CLEAR" })}
                >
                  Remove all                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-12">
          {!state.checkout && state.itemsCounter === 0 && (
            <div className={`col-12 text-center ${style.complete}`}>
              <h3>Do You want buy more?</h3>
              <Link href="/" passHref>Return to the store</Link>
            </div>
          )}
          {state.checkout && (
            <div className={`col-12 text-center ${style.complete}`}>
              <h3>buy successful</h3>
              <Link href="/" passHref>buy more</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
