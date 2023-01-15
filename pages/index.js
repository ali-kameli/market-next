import Head from 'next/head';
import Store from '../src/Components/HomePanel/Store';
import Landing from '../src/Components/Landing/Landing';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Landing />
      <Store />
    </>
  );
}

export default HomePage;
