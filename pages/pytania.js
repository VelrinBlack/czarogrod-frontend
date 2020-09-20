import React from 'react';

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
    <Header />
    <Questions />
    <Footer />
  </>
);

export default Pytania;
