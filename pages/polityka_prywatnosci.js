import React from 'react';
import Head from 'next/head';

import PrivacyPolicy from '../src/pages/PrivacyPolicy/PrivacyPolicy';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const PolitykaPrywatnosci = () => (
  <>
    <Head>
      <meta property='og:image' content='https://czarogrod.pl/images/other/logo.png' />
      <meta
        property='og:image:secure_url'
        content='https://czarogrod.pl/images/other/logo.png'
      />
      <title>Czarogród | Polityka Prywatności</title>
    </Head>
    <Header />
    <PrivacyPolicy />
    <Footer />
  </>
);

export default PolitykaPrywatnosci;
