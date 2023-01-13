import Head from 'next/head';
import Store from '../src/Components/HomePanel/Store';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Store />
    </>
  );
}

export default HomePage;