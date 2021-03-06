import React from 'react';
import Head from 'next/head';

import Offer from '../src/pages/Offer/Offer';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Oferta = ({ data }) => (
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
      <title>Czarogród | Oferta</title>
    </Head>
    <Header />
    <Offer data={data} />
    <Footer />
  </>
);

Oferta.getInitialProps = async (ctx) => {
  const data = await fetch(
    'https://czarogrod-backend-strapi.herokuapp.com/offer',
  ).then((res) => res.json());
  return { data };
};

export default Oferta;
