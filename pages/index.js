import React from 'react';
import Head from 'next/head';
import useSWR from 'swr';

import Home from '../src/pages/Home/Home';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const fetcher = async (url) => {
  const res = await fetch(url);
  const json = await res.json();
  return json;
};

const Index = () => {
  const { data: posts, error: postsError } = useSWR(
    'https://czarogrod-backend-strapi-2.herokuapp.com/posts',
    fetcher
  );

  const { data: portfolioCards, error: portfolioCardsError } = useSWR(
    'https://czarogrod-backend-strapi-2.herokuapp.com/portfolio-cards',
    fetcher
  );

  return (
    <>
      <Head>
        <meta
          property='og:image'
          content='https://czarogrod.pl/images/other/logo.webp'
        />
        <meta
          property='og:image:secure_url'
          content='https://czarogrod.pl/images/other/logo.webp'
        />
        <title>Czarogród</title>
      </Head>
      <Header />
      <Home data={{ posts, portfolioCards }} />
      <Footer />
    </>
  );
};

export default Index;
