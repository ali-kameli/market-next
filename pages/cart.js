import Head from "next/head";
import ShopCart from "../src/Components/ShopCart/ShopCart";

const CartPage = () => {
    return (
        <>
            <Head>
                <title>Cart</title>
            </Head>
            <ShopCart />
        </>
    )
}

export default CartPage;