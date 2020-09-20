import React from 'react';

import Contact from '../src/pages/Contact/Contact';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Kontakt = () => (
  <>
    <Header />
    <Contact />
    <Footer />
  </>
);

export default Kontakt;
