import React from 'react';
import Head from 'next/head';

import Contact from '../src/pages/Contact/Contact';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const Kontakt = () => {
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
        <title>Czarogród | Kontakt</title>
      </Head>
      <Header />
      <Contact />
      <Footer />
    </>
  );
};

export default Kontakt;
