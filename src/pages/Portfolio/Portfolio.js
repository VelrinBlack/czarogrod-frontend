import React, { useEffect, useState, useContext } from 'react';

import { StyledContainer } from './PortfolioStyles';
import Card from '../../components/Portfolio/Card/Card';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

const Portfolio = ({ data }) => {
  return (
    <>
      <StyledContainer>
        <h1>Portfolio</h1>

        <h2>Poniżej możesz zobaczyć niektóre z moich projektów.</h2>
        <h2 className='margin'>
          Jeśli jesteś zainteresowany, zadzwoń lub napisz i zamów indywidualną wycenę.
        </h2>

        <div className='cardsContainer'>
          {data.map((card) => {
            if (card === 'loading')
              return (
                <p className='loading' key='loading'>
                  Ładowanie...
                </p>
              );

            return (
              <Card
                src={card.image.url}
                alt={card.image.name}
                text={card.description}
                key={card.id}
              />
            );
          })}
        </div>
      </StyledContainer>

      <SingleSlide
        text='Masz pytania? Tutaj znajdziesz odpowiedź'
        location='/pytania'
        image='/images/slider/3.webp'
      />

      <SingleSlide
        text='Zadzwoń lub napisz – służę pomocą'
        location='/kontakt'
        image='/images/slider/4.webp'
      />
    </>
  );
};

export default Portfolio;
