import style from "./ProductDetailCard.module.css"; 

const ProductDetailCard = (props) => {
    const detail = props;
    return (
        <>
            <ul className={style.detail_ul}>
                <li>
                    <span>  size</span>
                    : {detail.detail.size}
                </li>
                <li>
                    <span>    weight</span>
                    : {detail.detail.weight}
                </li>
                <li>
                    <span>  screen tech</span>
                    : {detail.detail.screen_tech}
                </li>
                <li>
                    <span> resolution</span>
                    : {detail.detail.resolution}
                </li>
                <li>
                    <span>ability</span>
                    : {detail.detail.ability}
                </li>
                <li>
                    <span>  chipset</span>
                    : {detail.detail.chipset}
                </li>
                <li>
                    <span> central processor</span>
                    : {detail.detail.central_processor}
                </li>
                <li>
                    <span>photo resolution</span>
                    : {detail.detail.photo_resolution}
                </li>
            </ul>
        </>
    );
}

export default ProductDetailCard;