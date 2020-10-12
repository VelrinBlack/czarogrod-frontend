import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import useSWR from 'swr';

import Home from '../src/pages/Home/Home';
import Footer from '../src/components/Footer/Footer';

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Index = () => {
  const { data, error } = useSWR(
    'https://czarogrod-backend-strapi.herokuapp.com/posts',
    fetcher,
  );

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
