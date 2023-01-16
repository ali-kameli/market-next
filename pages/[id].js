import Head from "next/head";
import { Data } from "../src/Api/Data";
import ProductDetails from "../src/Components/HomePanel/ProductDetails";

const DetailPage = ({ detail }) => {
    return (
        <>
            <Head>
                <title>Product Detail</title>
            </Head>
            <ProductDetails detail={detail} />
        </>
    );
}
export default DetailPage;


export function getServerSideProps({ params }) {
    return {
        props: {
            detail: Data.getProducts().find((item) => {
                return item.id == params.id;
            }),
        }
    }
}