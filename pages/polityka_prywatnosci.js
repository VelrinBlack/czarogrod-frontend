import React from 'react';
import Head from 'next/head';

import PrivacyPolicy from '../src/pages/PrivacyPolicy/PrivacyPolicy';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const PolitykaPrywatnosci = () => (
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
      <title>Czarogród | Polityka Prywatności</title>
    </Head>
    <Header />
    <PrivacyPolicy />
    <Footer />
  </>
);

export default PolitykaPrywatnosci;
