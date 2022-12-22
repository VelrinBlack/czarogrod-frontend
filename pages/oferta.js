import React from 'react';
import Head from 'next/head';

import Offer from '../src/pages/Offer/Offer';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const Oferta = ({ data }) => (
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
      <title>Czarogród | Oferta</title>
    </Head>
    <Header />
    <Offer data={data} />
    <Footer />
  </>
);

Oferta.getInitialProps = async (ctx) => {
  const data = await fetch(
    'https://czarogrod-backend-strapi-2.herokuapp.com/offer'
  ).then((res) => res.json());
  return { data };
};

export default Oferta;
