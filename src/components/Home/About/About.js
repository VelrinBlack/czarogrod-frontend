import React from 'react';

import { StyledContainer } from './AboutStyles';

const About = () => {
  return (
    <StyledContainer>
      <a name='omnie'></a>
      <div className='container'>
        <div className='text-container'>
          <h2>O mnie</h2>
          <p> Dzień dobry. Witaj w Czarogrodzie. Razem odmienimy Twój ogród!</p>

          <p>
            Nazywam się Agnieszka Lizończyk i z chęcią zaczaruję każdy zielony zakątek, nawet ten
            najmniejszy.
          </p>

          <p>
            {' '}
            Ostatnie kilkanaście lat przepracowałam w korporacji, nieobce są mi pojęcia analizy
            finansowej, czy przygotowywania budżetu. Excel i Power Point nie mają przede mną żadnych
            tajemnic.
          </p>

          <p>
            Jednak od lat moją największą pasją są ogrody i dziś mogę się szczycić tytułem
            architekta krajobrazu. W każdy projekt wkładam swoje serce i zapał, zawsze dbam o to, by
            koncepcja była indywidualnie dopasowana do potrzeb odbiorcy.
          </p>

          <p>
            Zapraszam do współpracy, razem możemy wyczarować Twój idealny ogród, balkon lub taras.
          </p>

          <p>
            Działam na terenie województwa małopolskiego i śląskiego, jednak w przypadku mniejszych
            projektów z innych części Polski, z chęcią podejmę się współpracy z Tobą w sposób
            zdalny.
          </p>
        </div>
        <div className='image-container'>
          <img src='/images/other/profile.jpg' alt='Mój portret' />
        </div>
      </div>
    </StyledContainer>
  );
};

export default About;
