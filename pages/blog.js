import React from 'react';

import Blog from '../src/pages/Blog/Blog';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Index = () => (
  <>
    <Header />
    <Blog />
    <Footer />
  </>
);

export default Index;
