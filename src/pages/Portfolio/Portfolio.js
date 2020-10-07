import React, { useEffect, useState, useContext } from 'react';

import { StyledContainer } from './PortfolioStyles';
import Card from '../../components/Portfolio/Card/Card';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import dataContext from '../../Context';

const Portfolio = () => {
  const [cards, setCards] = useState([]);
  const data = useContext(dataContext);

  useEffect(() => {
    if (data.portfolio) setCards(data.portfolio);
  });
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
                    src={card.image.url}
                    alt={card.image.name}
                    text={card.description}
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
        image='/images/slider/1.jpg'
      />

      <SingleSlide
        text='Zadzwoń lub napisz – służę pomocą'
        location='/kontakt'
        image='/images/slider/4.jpg'
      />
    </>
  );
};

export default Portfolio;
