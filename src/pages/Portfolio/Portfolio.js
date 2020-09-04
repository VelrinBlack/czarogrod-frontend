import React, { useState, useEffect } from 'react';

import { StyledContainer } from './PortfolioStyles';
import Card from '../../components/Portfolio/Card/Card';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import { fetchPortfolio } from '../../utilities/apiCalls';

import img3 from '../../images/slider/1.jpg';
import img4 from '../../images/slider/4.jpg';

const Portfolio = () => {
  const [cards, setCards] = useState(['loading']);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    fetchPortfolio().then((data) => setCards(data.data));
  }, []);

  return (
    <>
      <StyledContainer>
        <h1>Portfolio</h1>
        <div className='cardsContainer'>
          {cards.map((card) => {
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
          })}
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
