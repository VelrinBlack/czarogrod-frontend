import React from 'react';

import Offer from '../src/pages/Offer/Offer';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Oferta = () => (
  <>
    <Header />
    <Offer />
    <Footer />
  </>
);

export default Oferta;
