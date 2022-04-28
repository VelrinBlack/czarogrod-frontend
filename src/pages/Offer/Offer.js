import React, { useEffect, useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import { StyledContainer } from './OfferStyles';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

const Offer = ({ data }) => {
  return (
    <>
      <StyledContainer>
        <h1>Oferta</h1>
        <ReactMarkdown source={data.content} />
      </StyledContainer>

      <SingleSlide
        text='Masz wątpliwości? Zobacz o co pytają klienci'
        location='/pytania'
        image={'/images/slider/3.webp'}
      />

      <SingleSlide
        text='Sprawdź moje ostatnie projekty'
        location='/portfolio'
        image={'/images/slider/2.webp'}
      />
    </>
  );
};

export default Offer;
