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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { Rating } from "@mui/material";


const Product = ({ productData }) => {
  const [heart, setHeart] = useState(false);
  const [show, setShow] = useState(false);
  const [shareLink, setShareLink] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    setShareLink(window.location.href);
  }, [])

  return (
    <div className={` my-3 pt-4 pb-1 ${style.product_cart}`}>
      <Link href={`/${productData.id}`} className={style.link_product} passHref>
        <span>
          <Image src={productData.image} alt="product" className={`p-3 mb-3 ${style.product_image}`} width={170} height={180} />
          <Rating name="read-only" value={productData.rate} readOnly />
          <p style={{ fontSize: "smaller", height: "2.5rem" }}>
            {productData.title}
          </p>
        </span>
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

            {/* {quantityCount(state, productData.id) > 0 && (
              <span className="counter-product">
                {quantityCount(state, productData.id)}
              </span>
            )} */}
            <button
              onClick={() => dispatch({ type: "ADD_ITEM", payload: productData })}
              className={style.btn_cart_product_add}
            >
              <span onClick={() => {
                !quantityCount(state, productData.id) &&
                  toast.success(`😄 ${productData.title} has been added to the shopping cart`, {
                    position: "top-right",
                    closeOnClick: true,
                    theme: "colored",
                  })
              }}>
                <FontAwesomeIcon icon={faCartArrowDown} style={{ color: quantityCount(state, productData.id) > 0 && "green" }} />
              </span>
            </button>
          </span>
          <span className={style.product_share_btn}>
            <span onClick={handleShow}>
              <FontAwesomeIcon icon={faShareNodes} />
            </span>
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
            <FontAwesomeIcon icon={faHeart} style={{ color: heart ? "red" : "gray" }} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Product;
