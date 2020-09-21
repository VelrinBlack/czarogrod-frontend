import React from 'react';
import Head from 'next/head';

import Questions from '../src/pages/Questions/Questions';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Pytania = () => (
  <>
    <Head>
      <meta property='og:image' content='https://czarogrod.pl/images/other/logo.png' />
      <meta
        property='og:image:secure_url'
        content='https://czarogrod.pl/images/other/logo.png'
      />
      <title>Czarogród | Pytania</title>
    </Head>
    <Header />
    <Questions />
    <Footer />
  </>
);

export default Pytania;
