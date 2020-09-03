import React, { useEffect } from 'react';

import Header from '../../components/Header';
import Form from '../../components/Contakt/Form';
import Footer from '../../components/Footer';

const Home = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <Header />
      <Form />
      <Footer />
    </>
  );
};

export default Home;
