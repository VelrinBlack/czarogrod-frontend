import React from 'react';
import Head from 'next/head';

import Contact from '../src/pages/Contact/Contact';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Kontakt = () => {
  return (
    <>
      <Head>
        <meta property='og:image' content='https://czarogrod.pl/images/other/logo.png' />
        <meta
          property='og:image:secure_url'
          content='https://czarogrod.pl/images/other/logo.png'
        />
        <title>Czarogród | Kontakt</title>
      </Head>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default Kontakt;
