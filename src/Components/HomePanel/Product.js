import React, { useContext, useEffect, useState } from "react";
import { isInCart, quantityCount } from "../helpers/functions";
import { CartContext } from "../context/CartContextProvider";
// import shop from "../assets/addtocart.png";
import {
  EmailIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
  WhatsappShareButton,
  TelegramShareButton,
  EmailShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { Modal } from 'react-bootstrap';
import { toast } from "react-toastify";
import Link from "next/link";
import Image from "next/image";
import style from "./Productcss.module.css";
// import { Rating } from "@mui/material";


const Product = ({ productData }) => {
  const [heart, setHeart] = useState(false);
  const [show, setShow] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    setShareLink(window.location.href);
  }, [])

  return (
    <div className={` my-3 pt-4 pb-1 ${style.product_cart}`}>
      <Link href={`/${productData.id}`} className={style.link_product}>
        <>
          <Image src={productData.image} alt="product" className="p-3 mb-3" width={170} height={167} />
          {/* <Rating name="read-only" value='2' readOnly /> */}

          <p style={{ fontSize: "smaller", height: "2.5rem" }}>
            {productData.title}
          </p>
        </>
      </Link>
      <div className={style.product_old_price}>
        {
          productData.old_price &&
          <del>
            ${" "}{productData.old_price}
          </del>
        }
      </div>
      <div className={style.product_btns}>
        <span className={style.product_new_price}>
          ${" "} {productData.new_price}
          {
            productData.old_price &&
            <span className={style.product_show_discount}>
              (%
              {(Math.round((productData.new_price - productData.old_price) / productData.old_price * 100))}
              )
            </span>

          }
        </span>
        <div id={style.productBtns}>
          <span className={style.product_buy_btn}>
            {/* {quantityCount(state, productData.id) > 1 && (
              <button
                onClick={() => dispatch({ type: "DECREASE", payload: productData })}
                className="btn-cart-product"
              >
                -
              </button>
            )}

            {quantityCount(state, productData.id) === 1 && (
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: productData })
                }
                className="btn-cart-product"
              >
                <i className="fa fa-trash-o"></i>
              </button>
            )}
            {quantityCount(state, productData.id) > 0 && (
              <span className="counter-product">
                {quantityCount(state, productData.id)}
              </span>
            )} */}
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
              className={style.btn_cart_product_add}
            >
              <i className="fa fa-cart-arrow-down"
                onClick={
                  () => {
                    toast.success(`😄 The product has been added to the shopping cart`, {
                      position: "top-right",
                      closeOnClick: true,
                      theme: "colored",
                    })
                  }
                }
              ></i>
            </button>
          </span>
          <span className={style.product_share_btn}>
            <i className="fa fa-share-alt" onClick={handleShow}></i>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header>
                <Modal.Title>Share via:</Modal.Title>
              </Modal.Header>
              <Modal.Body className={style.modal_body_share}>
                {/* whatsapp  */}
                <WhatsappShareButton
                  url={`${shareLink}/${productData.id}`}
                  hashtags={["hashtag1", "hashtag2"]}
                >
                  <WhatsappIcon size={32} round />
                </WhatsappShareButton>

                {/* Linkedin  */}
                <LinkedinShareButton
                  url={`${shareLink}/${productData.id}`}
                  hashtags={["hashtag1", "hashtag2"]}
                >
                  <LinkedinIcon size={32} round />
                </LinkedinShareButton>
                {/* Telegram  */}
                <TelegramShareButton
                  url={`${shareLink}/${productData.id}`}
                  hashtags={["hashtag1", "hashtag2"]}
                >
                  <TelegramIcon size={32} round />
                </TelegramShareButton>
                {/* Telegram  */}
                <TwitterShareButton
                  url={`${shareLink}/${productData.id}`}
                  hashtags={["hashtag1", "hashtag2"]}
                >
                  <TwitterIcon size={32} round />
                </TwitterShareButton>
                {/* Email  */}
                <EmailShareButton
                  url={`${shareLink}/${productData.id}`}
                  hashtags={["hashtag1", "hashtag2"]}
                >
                  <EmailIcon size={32} round />
                </EmailShareButton>
              </Modal.Body>
            </Modal>
          </span>

          <span className={style.product_heart_btn} onClick={() => { setHeart(!heart) }}>
            <i className="fa fa-heart-o" style={{ color: heart && "red" }}></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
