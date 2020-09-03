import React, { useState, useEffect } from 'react';

import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import { StyledContainer } from './OfferStyles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SingleSlide from '../../components/SingleSlide';

import img1 from '../../images/slider/3.jpg';
import img2 from '../../images/slider/2.jpg';

const Offer = () => {
  const [data, setData] = useState('loading');

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    axios
      .get('https://czarogrod-backend-strapi.herokuapp.com/offer')
      .then((data) => {
        return setData(data.data.content);
      });
  }, []);

  return (
    <>
      <Header />

      <StyledContainer>
        <h1>Oferta</h1>

        {data === 'loading' ? (
          <p className='loading'>Ładowanie...</p>
        ) : (
          <ReactMarkdown source={data} />
        )}
      </StyledContainer>

      <SingleSlide
        text='Masz wątpliwości? Zobacz o co pytają klienci'
        location='/pytania'
        image={img1}
      />

      <SingleSlide
        text='Sprawdź moje ostatnie projekty'
        location='/portfolio'
        image={img2}
      />

      <Footer />
    </>
  );
};

export default Offer;
