import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Home from '../src/pages/Home/Home';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://czarogrod-backend-strapi.herokuapp.com/posts').then((res) =>
      res.json().then((data) => setData(data)),
    );
  }, []);

  return (
    <>
      <Head>
        <meta
          property='og:image'
          content='https://czarogrod.pl/images/other/logo.png'
        />
        <meta
          property='og:image:secure_url'
          content='https://czarogrod.pl/images/other/logo.png'
        />
        <title>Czarogród</title>
      </Head>
      <Header />
      <Home data={data} />
      <Footer />
    </>
  );
};

export default Index;
