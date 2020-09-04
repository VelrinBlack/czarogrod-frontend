import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

import { StyledContainer } from './OfferStyles';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import { fetchOffer } from '../../utilities/apiCalls';

import img1 from '../../images/slider/3.jpg';
import img2 from '../../images/slider/2.jpg';

const Offer = () => {
  const [data, setData] = useState('loading');

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    fetchOffer().then((data) => {
      return setData(data.data.content);
    });
  }, []);

  return (
    <>
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
    </>
  );
};

export default Offer;
