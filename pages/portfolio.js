import React from 'react';
import Head from 'next/head';

import Portfolio from '../src/pages/Portfolio/Portfolio';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const PortfolioPage = () => (
  <>
    <Head>
      <meta property='og:image' content='https://czarogrod.pl/images/other/logo.png' />
      <meta
        property='og:image:secure_url'
        content='https://czarogrod.pl/images/other/logo.png'
      />
      <title>Czarogród | Portfolio</title>
    </Head>
    <Header />
    <Portfolio />
    <Footer />
  </>
);

export default PortfolioPage;
