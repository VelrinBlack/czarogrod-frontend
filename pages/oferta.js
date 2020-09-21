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

const Oferta = () => (
  <>
    <Head>
      <meta property='og:image' content='https://czarogrod.pl/images/other/logo.png' />
      <meta
        property='og:image:secure_url'
        content='https://czarogrod.pl/images/other/logo.png'
      />
      <title>Czarogród | Oferta</title>
    </Head>
    <Header />
    <Offer />
    <Footer />
  </>
);

export default Oferta;
