import React, { useEffect } from 'react';

import { StyledContainer } from './PortfolioStyles';
import Card from '../../components/Portfolio/Card/Card';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

import img3 from '../../images/slider/1.jpg';
import img4 from '../../images/slider/4.jpg';

const Portfolio = () => {
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
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1597923516/pergola_ogrodowa_8fe3589728.jpg'
            alt='pergola ogrodowa'
            text='Mała architektura doda smaku każdemu zakątkowi w ogrodzie.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1597923516/pergola_przy_skarpie_4002f9ad5b.jpg'
            alt='pergola przy skarpie'
            text='Skarpy nie są łatwym tematem, jednak ich odpowiednie zagospodarowanie pozwala↵zaoszczędzić sporo pracy w ogrodzie.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1597923516/powojniki_w_altanie_a3e0c9030e.jpg'
            alt='powojniki w altanie'
            text='Wybór odpowiednich roślin kwitnących pomoże zaczarować nasz ogród.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1597923516/rabata_bylinowa_thuje_447394e124.jpg'
            alt='rabata bylinowa thuje'
            text='„Rządek thuj” pod płotem nie musi być nudny, kolorowa rabata ożywi każdy zakątek.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1597923516/rabata_bylinowa_79f8cd0a73.jpg'
            alt='rabata bylinowa'
            text='Rabata bylinowa pozwala na szybkie osiągnięcie efektu dojrzałego ogrodu, już w przyszłym sezonie to miejsce będzie wyglądać zupełnie inaczej.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1597923520/skarpa_nasadzenia_713e73adf1.jpg'
            alt='skarpa nasadzenia'
            text='Gęste nasadzenia to dużo pracy, jednak efekt będzie szybciej cieszył właścicieli.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1597923522/stol_w_ogrodzie_0a8856c528.jpg'
            alt='stół w ogrodzie'
            text='Stół na tarasie to doskonałe miejsce do celebrowania wspólnych posiłków.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1597923521/trawy_proso_rozgowate_d4c9bb5eaa.jpg'
            alt='trawy proso rozgowate'
            text='Trawy ozdobne stają się coraz bardziej popularne w naszych ogrodach, Zachwycają nie tylko pięknym kwitnieniem, ale także lekkim, zwiewnym pokrojem.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1598011467/pergola_klon_002f2fc5d7.jpg'
            alt='pergola klon'
            text='Pergola ogrodowa to doskonałe miejsce do rodzinnego odpoczynku.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1599477783/taras_pergola_fad8a285e1.jpg'
            alt='taras pergola'
            text='Pergola to bardzo modny "dodatek" ogrodowy, może chronić od słońca, lub odgrodzić nas od sąsiadów.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1599477868/ogrod_nowoczesny_d6e103831c.jpg'
            alt='ogrod nowoczesny'
            text='Odpowiednio zaprojektowany taras pomieści całą rodzinę i znajomych.'
          />
          <Card
            src='https://res.cloudinary.com/velrinblack/image/upload/v1599477976/kolorowe_rabaty_0012ce694c.jpg'
            alt='kolorowe rabaty'
            text='Kolorowe rabaty ożywią każdy ogród, a ciekawie zaprojektowane ścieżki zachęcą do spaceru.'
          />
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
