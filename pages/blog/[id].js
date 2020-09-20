import React from 'react';

import Article from '../../src/pages/Article/Article';
import Footer from '../../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../../src/components/Header/Header');
  },
  { ssr: false },
);

const Index = () => (
  <>
    <Header />
    <Article />
    <Footer />
  </>
);

export default Index;
