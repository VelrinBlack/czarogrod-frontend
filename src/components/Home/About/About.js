import React from 'react';

import { StyledContainer } from './AboutStyles';

const About = () => {
  return (
    <StyledContainer>
      <a name='omnie'></a>
      <div className='container'>
        <div className='text-container'>
          <h2>O mnie</h2>
          <p>Dzień dobry. Witaj w Czarogrodzie.</p>

          <p>
            Nazywam się Agnieszka Lizończyk i chętnie zaczaruję każdy zielony zakątek, nawet ten
            najmniejszy. Razem odmienimy Twój ogród!
          </p>

          <p>Jako architekt krajobrazu łączę artystyczną fantazję z techniczną formą przekazu.</p>

          <p>
            Projektuję w zgodzie z naturą, w każdy ogród wkładam swoje serce i zapał. Zawsze dbam o
            to, by koncepcja była indywidualnie dopasowana do Twoich potrzeb, jak również do
            miejsca, w którym ma powstać. Nie narzucam, lecz proponuję. Doradzam, lecz zawsze
            stawiam Twoje zdanie na pierwszym miejscu.
          </p>
        </div>
        <div className='image-container'>
          <img src='/images/other/profile.webp' alt='Mój portret' />
        </div>
      </div>
    </StyledContainer>
  );
};

export default About;
