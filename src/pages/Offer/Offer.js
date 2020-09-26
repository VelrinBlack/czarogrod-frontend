import React, { useEffect, useState, useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import { StyledContainer } from './OfferStyles';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import dataContext from '../../Context';

const Offer = () => {
  const [offer, setOffer] = useState(null);
  const data = useContext(dataContext);

  useEffect(() => {
    if (data.offer) setOffer(data.offer.content);
  });

  return (
    <>
      <StyledContainer>
        <h1>Oferta</h1>
        {offer !== null ? <ReactMarkdown source={offer} /> : 'Ładowanie...'}
      </StyledContainer>

      <SingleSlide
        text='Masz wątpliwości? Zobacz o co pytają klienci'
        location='/pytania'
        image={'/images/slider/3.jpg'}
      />

      <SingleSlide
        text='Sprawdź moje ostatnie projekty'
        location='/portfolio'
        image={'/images/slider/4.jpg'}
      />
    </>
  );
};

export default Offer;
