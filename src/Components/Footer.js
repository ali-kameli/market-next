import Link from "next/link";
import style from "./Footer.module.css";


const Footer = () => {
    return (
        <div>
            <div className="container my-5">
                <div className="row" style={{ justifyContent: "space-between" }}>
                    <div className={`col-12 col-md-6 col-lg-3 ${style.section_footer}`}>
                        <span>
                            <h3>Email Address</h3>
                            <a className={style.link} href="mailto:alikameli0123@gmail.com">
                                alikameli0123@gmail.com
                            </a>
                        </span>
                        <i className={`fa fa-envelope ${style.fa_footer}`}></i>
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 ${style.section_footer}`}>
                        <span>
                            <h3>Message</h3>
                            <div style={{ display: "grid" }}>
                                <a className={style.link} href="https://www.instagram.com/__aaalli_">
                                    __aaalli_
                                    <i className={`fa fa-instagram ${style.icon_footer}`}></i>
                                </a>
                                <a className={style.link} href="tel:+989385109370">
                                    0938 510 9370
                                    <i className={`fa fa-whatsapp ${style.icon_footer}`}></i>
                                </a>
                            </div>
                        </span>
                        <i className={`fa fa-comment ${style.fa_footer}`}></i>
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 ${style.section_footer}`}>
                        <span>
                            <h3>Phone</h3>
                            <a className={style.link} href="tel:+989385109370">0938 510 9370</a>
                        </span>
                        <i className={`fa fa-phone ${style.fa_footer}`}></i>
                    </div>
                    <div className={`col-12 col-md-6 col-lg-3 ${style.section_footer}`}>
                        <span>
                            <h3>Address</h3>
                            <p>Iran, mazandaran, sari</p>
                        </span>
                        <i className={`fa fa-map-marker ${style.fa_footer}`}></i>
                    </div>
                </div>
            </div>
            <div className={`container-fluid ${style.container_footer} py-3`}>
                <div className={`row pt-5 ${style.row_footer}`}>
                    <div className={`col-12 col-md-3 ${style.service_footer}`}>
                        <h3 className={style.service_moshavere}>services</h3>
                        <Link className={style.link} href="/#" passHref>Comprehensivr Guide</Link>
                        <Link className={style.link} href="/#" passHref>Common Question</Link>
                        <Link className={style.link} href="/#" passHref>Privacy Policy </Link>
                    </div>
                    <div className={`col-12 col-md-3 ${style.service_footer}`}>
                        <h3 className={style.service_moshavere}> Buy Guide</h3>
                        <Link className={style.link} href="/#" passHref>Payment Method</Link>
                        <Link className={style.link} href="/#" passHref> Post products</Link>
                        <Link className={style.link} href="/#" passHref>product Warranty</Link>
                    </div>
                    <div className={`col-12 col-md-3 ${style.service_footer}`}>
                        <h3 className={style.service_moshavere}> Buy Guide</h3>
                        <Link className={style.link} href="/#" passHref>Payment Method</Link>
                        <Link className={style.link} href="/#" passHref> Post products</Link>
                        <Link className={style.link} href="/#" passHref>product Warranty</Link>
                    </div>
                    <div className={`col-12 col-md-3 ${style.footer_text}`}>
                        <h3>Market</h3>
                        <p>
                        </p>
                    </div>
                    <div
                        className={`col-12 ${style.footer_develooper}`}
                    >
                        © 2022 All rights reserved - Designed and Developed by<a className={style.link}
                            href="https://www.instagram.com/__aaalli_"
                            style={{ color: "rgb(255 203 203)" }}
                        >
                            {" "}
                            Ali Kameli{" "}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;