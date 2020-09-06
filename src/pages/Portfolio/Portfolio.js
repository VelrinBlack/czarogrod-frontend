import React, { useEffect, useContext } from 'react';

import { StyledContainer } from './PortfolioStyles';
import Card from '../../components/Portfolio/Card/Card';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import dataContext from '../../Context';

import img3 from '../../images/slider/1.jpg';
import img4 from '../../images/slider/4.jpg';

const Portfolio = () => {
  const data = useContext(dataContext);

  let cards = [];
  if (data) {
    cards = data.portfolio;
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
        <h1>Portfolio</h1>
        <div className='cardsContainer'>
          {cards.length > 0
            ? cards.map((card) => {
                if (card === 'loading')
                  return (
                    <p className='loading' key='loading'>
                      Ładowanie...
                    </p>
                  );

                return (
                  <Card
                    src={card.Image.url}
                    alt={card.Image.name}
                    text={card.Description}
                    key={card.id}
                  />
                );
              })
            : 'Ładowanie...'}
        </div>
      </StyledContainer>

      <SingleSlide
        text='Masz pytania? Tutaj znajdziesz odpowiedź'
        location='/pytania'
        image={img3}
      />

      <SingleSlide
        text='Zadzwoń lub napisz – służę pomocą'
        location='/kontakt'
        image={img4}
      />
    </>
  );
};

export default Portfolio;
