import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./../context/CartContextProvider";
import Cart from "./Cart";
import "./ShopCart.css";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
console.log(state);
  return (
    <div className="container-fluid container-shopcart pt-5 ">
      <div className="row">
        <div className="col-12 col-md-7 cartContainer m-0 p-0">
          {state.selectedItems.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
        </div>
        <div className="col-12 col-md-3 p-0 m-0">
          {state.itemsCounter > 0 && (
            <div className="payments">
              <p className="much-counter-cart">
                <span className="much-counter-cart">تعداد محصولات : </span>
                {state.itemsCounter}
              </p>
              <p className="much-counter-cart">
                <span className="much-counter-cart">قیمت کالا ها : </span>
                <span>
                  {state.total.length > 3 ? state.total.toLocaleString() : state.total} <small>تومان</small>
                </span>
              </p>
              <p className="much-counter-cart">
                <span className="much-counter-cart">تخفیف کالا ها : </span>
                <span className="off-counter-cart">
                  (%50) {state.total.length > 3 ? state.total.toLocaleString() : state.total} <small>تومان</small>
                </span>
              </p>
              <hr />
              <p className="basket-counter-cart">
                <span className="basket-counter-cart">جمع سبد خرید : </span>
                <span>
                  {state.total.length > 3 ? state.total.toLocaleString() : state.total} <small>تومان</small>
                </span>
              </p>
              <div className="buttonContainer">
                <button
                  className="checkout"
                  onClick={() => dispatch({ type: "CHECKOUT" })}
                >
                  تسویه حساب
                </button>
                <button
                  className="clear"
                  onClick={() => dispatch({ type: "CLEAR" })}
                >
                  حذف همه
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="col-12">
          {!state.checkout && state.itemsCounter === 0 && (
            <div className="complete col-12 text-center">
              <h3>میخواهید خرید کنید ؟</h3>
              <Link to="/products">بازگشت به فروشگاه</Link>
            </div>
          )}
          {state.checkout && (
            <div className="complete col-12 text-center">
              <h3>فرآیند خرید موفقیت آمیز بود </h3>
              <Link to="/products">خرید بیشتر</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopCart;
