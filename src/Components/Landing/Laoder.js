import React from "react";
import style from "./Loader.module.css"

const Loader = () => {
  return (
    <section id="global">
      <div id="top" className={style.mask}>
        <div className={style.plane}></div>
      </div>
      <div id="middle" className={style.mask}>
        <div className={style.plane}></div>
      </div>

      <div id="bottom" className={style.mask}>
        <div className={style.plane}></div>
      </div>

      <p >
        <i>LOADING...</i>
      </p>
    </section>
  );
};

export default Loader;
