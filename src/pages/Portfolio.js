import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Card from '../components/Portfolio/Card';

import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';

import img01 from '../images/pergola ogrodowa.jpg'
import img02 from '../images/pergola przy skarpie.jpg'
import img03 from '../images/pergola stol ogrodowy.jpg'
import img04 from '../images/powojniki w altanie.jpg'
import img05 from '../images/rabata bylinowa thuje.jpg'
import img06 from '../images/rabata bylinowa.jpg'
import img07 from '../images/skarpa nasadzenia.jpg'
import img08 from '../images/stol w ogrodzie.jpg'
import img09 from '../images/trawy proso rozgowate.jpg'

const StyledContainer = styled.div`
    width: 80%;

    margin: 350px auto 0 auto;

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
    }

    @media (max-width: 1024px) {
        margin: 350px auto 0 auto;

        .cardsContainer {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr;
            grid-column-gap: 30px;
            grid-row-gap: 80px;
        }
    }

    @media (max-width: 768px) {
        .cardsContainer {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 80px;
        }
    }
`;

const Slides = styled.div`
    width: 100%;
    margin-top: 200px;

    .slide {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-size: cover;
        background-position: center;

        margin-top: 100px;

        color: #fff;

        overflow: hidden;
    }

    .slide1 {
        background-image: url(${img3});
    }
    .slide2 {
        background-image: url(${img4});
    }

    h1 {
        width: 100vw;
        display: block;

        padding: 20px;
        background: rgba(0, 0, 0, 0.2);

        text-align: center;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 2px;
    }
`;

const Portfolio = () => {

    useEffect(() => {
        window.scroll({
            top: 0,
            left: 0,
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
                        alt="img1"
                        text="Mała architektura doda smaku każdemu zakątkowi w ogrodzie."
                    />
                    <Card
                        src={img02}
                        alt="img1"
                        text="Skarpy nie są łatwym tematem, jednak ich odpowiednie zagospodarowanie pozwala
                        zaoszczędzić sporo pracy w ogrodzie."
                    />
                    <Card
                        src={img03}
                        alt="img1"
                        text="W każdym ogrodzie przyda się miejsce do odpoczynku."
                    />
                    <Card
                        src={img04}
                        alt="img1"
                        text="Wybór odpowiednich roślin kwitnących pomoże zaczarować nasz ogród."
                    />
                    <Card
                        src={img05}
                        alt="img1"
                        text="„Rządek thuj” pod płotem nie musi być nudny, kolorowa rabata ożywi każdy zakątek."
                    />
                    <Card
                        src={img06}
                        alt="img1"
                        text="Rabata bylinowa pozwala na szybkie osiągnięcie efektu dojrzałego ogrodu, już w
                        przyszłym sezonie to miejsce będzie wyglądać zupełnie inaczej."
                    />
                    <Card
                        src={img07}
                        alt="img1"
                        text="Gęste nasadzenia to dużo pracy, jednak efekt będzie szybciej cieszył właścicieli."
                    />
                    <Card
                        src={img08}
                        alt="img1"
                        text="Stół na tarasie to doskonałe miejsce do celebrowania wspólnych posiłków."
                    />
                    <Card
                        src={img09}
                        alt="img1"
                        text="Trawy ozdobne stają się coraz bardziej popularne w naszych ogrodach, Zachwycają
                        nie tylko pięknym kwitnieniem, ale także lekkim, zwiewnym pokrojem."
                    />
                </div>
            </StyledContainer>
            <Slides>
                <Link to="/pytania" style={{ textDecoration: 'none' }}>
                    <div className="slide1 slide">
                        <h1>Masz pytania? Tutaj znajdziesz odpowiedź</h1>
                    </div>
                </Link>
                <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                    <div className="slide2 slide">
                        <h1>Zadzwoń lub napisz – służę pomocą</h1>
                    </div>
                </Link>
            </Slides>
            <Footer />
        </>
    );
};

export default Portfolio;
