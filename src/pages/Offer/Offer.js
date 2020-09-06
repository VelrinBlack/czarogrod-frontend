import React, { useEffect, useContext } from 'react';
import ReactMarkdown from 'react-markdown';

import { StyledContainer } from './OfferStyles';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import dataContext from '../../Context';

import img1 from '../../images/slider/3.jpg';
import img2 from '../../images/slider/2.jpg';

const Offer = () => {
  const data = useContext(dataContext);

  let offer = 'Ładowanie...';

  if (data) {
    offer = data.offer.content;
  }

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <StyledContainer>
        <h1>Oferta</h1>
        <ReactMarkdown source={offer} />
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
    </>
  );
};

export default Offer;
