import React from 'react';

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
    <Header />
    <Portfolio />
    <Footer />
  </>
);

export default PortfolioPage;
