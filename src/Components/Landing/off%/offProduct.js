import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider";
import { isInCart, quantityCount } from "../../helpers/functions";
import style from "./OffProduct.module.css"
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown, faHeart, faShareNodes } from "@fortawesome/free-solid-svg-icons";
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

const OffProduct = ({ productData }) => {
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
    <div className={` ${style.product_cart} mx-1 my-3 pt-4 pb-1`}>
      <Link href={`/${productData.id}`} className={style.link_product} passHref>
        <div className={style.off_product}>
          <Image width={170} height={167} src={productData.image} alt="product" className="p-3 mb-3" />
          <p style={{ fontSize: "smaller", height: "5rem" }}>
            {productData.title}
          </p>
        </div>
      </Link>
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
            <span onClick={() => {!quantityCount(state, productData.id) &&
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
  );
};

export default OffProduct;
