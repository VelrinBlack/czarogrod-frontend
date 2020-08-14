// react
import React, { useEffect } from 'react';

// external packages
import styled from 'styled-components';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Portfolio/Card';
import SingleSlide from '../components/SingleSlide';

// images for slides
import img3 from '../images/slider/3.jpg';
import img4 from '../images/slider/4.jpg';

// images for cards
import img01 from '../images/portfolio/pergola ogrodowa.jpg'
import img02 from '../images/portfolio/pergola przy skarpie.jpg'
import img03 from '../images/portfolio/pergola stol ogrodowy.jpg'
import img04 from '../images/portfolio/powojniki w altanie.jpg'
import img05 from '../images/portfolio/rabata bylinowa thuje.jpg'
import img06 from '../images/portfolio/rabata bylinowa.jpg'
import img07 from '../images/portfolio/skarpa nasadzenia.jpg'
import img08 from '../images/portfolio/stol w ogrodzie.jpg'
import img09 from '../images/portfolio/trawy proso rozgowate.jpg'

const StyledContainer = styled.div`
    width: 80%;
    margin: 350px auto 0 auto;

    @media (max-width: 1024px) { margin: 350px auto 0 auto; }

    h1 {
        margin: 150px 0 100px 0;

        text-align: center;
        font-size: 50px;
    }

    .cardsContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 100px;

        @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-column-gap: 30px;
            grid-row-gap: 80px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 40px;
        }
    }
`;

const Portfolio = () => {

    useEffect(() => {
        // scroll to the top
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }, [])

    return (
        <>
            <Header />
            <StyledContainer>
                <h1>Portfolio</h1>
                <div className="cardsContainer">
                    <Card
                        src={img01}
                        alt="pergola ogrodowa"
                        text="Mała architektura doda smaku każdemu zakątkowi w ogrodzie."
                    />
                    <Card
                        src={img02}
                        alt="pergola przy skarpie"
                        text="Skarpy nie są łatwym tematem, jednak ich odpowiednie zagospodarowanie pozwala
                        zaoszczędzić sporo pracy w ogrodzie."
                    />
                    <Card
                        src={img03}
                        alt="pergola stol ogrodowy"
                        text="W każdym ogrodzie przyda się miejsce do odpoczynku."
                    />
                    <Card
                        src={img04}
                        alt="powojniki w altanie"
                        text="Wybór odpowiednich roślin kwitnących pomoże zaczarować nasz ogród."
                    />
                    <Card
                        src={img05}
                        alt="rabata bylinowa thuje"
                        text="„Rządek thuj” pod płotem nie musi być nudny, kolorowa rabata ożywi każdy zakątek."
                    />
                    <Card
                        src={img06}
                        alt="rabata bylinowa"
                        text="Rabata bylinowa pozwala na szybkie osiągnięcie efektu dojrzałego ogrodu, już w
                        przyszłym sezonie to miejsce będzie wyglądać zupełnie inaczej."
                    />
                    <Card
                        src={img07}
                        alt="skarpa nasadzenia"
                        text="Gęste nasadzenia to dużo pracy, jednak efekt będzie szybciej cieszył właścicieli."
                    />
                    <Card
                        src={img08}
                        alt="stol w ogrodzie"
                        text="Stół na tarasie to doskonałe miejsce do celebrowania wspólnych posiłków."
                    />
                    <Card
                        src={img09}
                        alt="trawy proso rozgowat"
                        text="Trawy ozdobne stają się coraz bardziej popularne w naszych ogrodach, Zachwycają
                        nie tylko pięknym kwitnieniem, ale także lekkim, zwiewnym pokrojem."
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

            <Footer />
        </>
    );
};

export default Portfolio;
