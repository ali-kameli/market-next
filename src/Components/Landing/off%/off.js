import React, { useContext } from "react";
import style from "./off.module.css";
import OffProduct from "./offProduct";
import { Data } from "../../../Api/Data";
import Image from "next/image";

const Off = () => {
  return (
    <div className={` container-fluid  pb-5 mt-5  ${style.off_landing}`}>
      <div className="row m-0" style={{ textAlign: "center" }}>
        <div className={`col-12 col-md-2 ${style.off_side}`}>
          <Image src='/assets/off/boxgift.png' alt="gift" className={style.img_off} width={120} height={120} />
          <span className="text-off">OFF% MARKET</span>
        </div>
        <div className={`col-md-10  ${style.off_resp}`} style={{ display: "flex " }}>
          {Data.getProducts().map((product) => (
            product.discount &&
            <OffProduct key={product.id} productData={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Off;
