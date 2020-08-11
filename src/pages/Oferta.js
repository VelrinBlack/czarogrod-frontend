// react
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// external packages
import styled from 'styled-components';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';

// images
import img1 from '../images/3.jpg';
import img2 from '../images/2.jpg';

const StyledContainer = styled.div`
    width: 70%;
    margin: 300px auto;

    @media (max-width: 1024px) {
        width: 90%;
        margin-top: 400px;
    }

    h1 {
        text-align: center;
        font-size: 50px;
    }

    h2 {
        font-size: 30px;
        margin-top: 100px;

        @media (max-width: 1024px) {
            font-size: 25px;
        }

        @media (max-width: 768px) {
            font-size: 20px;
        }
    }

`;

const Slides = styled.div`
    width: 100%;

    .slide {
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 100px;

        background-position: center;
        background-size: cover;

        text-decoration: none;
        color: #fff;
        overflow: hidden;

        h1 {
            width: 100%;
            display: block;

            padding: 20px;
            background-color: rgba(0, 0, 0, 0.2);

            text-align: center;
            font-size: 50px;
            font-weight: 700;
            letter-spacing: 2px;
        }
    }

    .slide1 {
        margin-top: 100px;
        background-image: url(${img1});
    }
    .slide2 {
        background-image: url(${img2});
    }
`;


const Oferta = () => {

    useEffect(() => {
        // scroll to the top
        window.scroll({
            top: 0
        });
    }, [])

    return (
        <>
            <Header />
            <StyledContainer>
                <h1>Oferta</h1>
                <h2>Jak przebiega proces projektowania?</h2>
                <ul>
                    <li>Pierwsze spotkanie to zazwyczaj wizyta w miejscu planowanego ogrodu oraz rozmowa o Waszych marzeniach.</li>
                    <li>Współpracę zaczynamy od ustalenia zakresu projektu, podpisania umowy i określenia terminu wykonania.</li>
                    <li>Wspólnie ustalamy potrzeby, które muszą być uwzględnione przy projektowaniu oraz co się Wam podoba, a czego chcemy uniknąć.</li>
                    <li>Przygotowanie dwóch wstępnych koncepcji na podstawie przekazanych wcześniej informacji oraz wizualizacji najbardziej charakterystycznych fragmentów ogrodu.</li>
                    <li>Teraz czas na wybór ostatecznej koncepcji, a także na wszelkie poprawki i zmiany.</li>
                    <li>Wybieramy rośliny, które mają znaleźć się w ogrodzie.</li>
                    <li>Wspólnie ustalona koncepcja przechodzi do dalszej realizacji, powstaje szczegółowy plan nasadzeń roślinnych oraz dokładny plan całego ogrodu.</li>
                    <li>Projekt jest gotowy, podpowiem Wam jak wybrać firmę wykonawczą, lub jak zabrać się za samodzielną realizację.</li>
                    <li>Teraz pozostaje już tylko relaks w Waszym nowym ogrodzie!</li>
                </ul>
                <p>Proces przebiega podobnie przy projektowaniu mniejszych przestrzeni jak taras, czy balkon, pomijamy wtedy tylko niepotrzebne etapy, a niektóre z nich ulegają przyspieszeniu. Przy realizacji tego typu projektów zazwyczaj wystarcza komunikacja zdalna.</p>
                <p>Cel jest zawsze ten sam, stworzyć zaczarowane miejsce, z którego z przyjemnością będziecie korzystać.</p>

                <h2>Co zawiera projekt?</h2>
                <p>Każdy projekt składa się z kilku kolejno przygotowywanych części:</p>
                <ul>
                    <li>plansza pokazująca kolorystykę i nastrój w projektowanym ogrodzie (tak zwany moodboard),</li>
                    <li>plan koncepcyjny zagospodarowania ogrodu, czyli rozmieszczenie wszystkich najważniejszych elementów, podział terenu na strefy funkcjonalne, zaplanowanie ciągów komunikacyjnych oraz małej architektury,</li>
                    <li>szczegółowy plan techniczny pokazujący dokładne rozmieszczenie roślin, ścieżek, tarasów, mebli ogrodowych, uwzględniający już istniejące elementy,</li>
                    <li>spis wszystkich roślin wraz z ich krótką charakterystyką,</li>
                    <li>plan oświetlenia,</li>
                    <li>wizualizacje, które pomogą w wyobrażeniu sobie finalnego efektu,</li>
                    <li>projekt może również zawierać propozycję altany, pergoli, drewutni, altany śmietnikowej, podjazdu lub ogrodzenia, wszystko zależy od tego, jakie elementy zawrzemy w podpisywanej umowie.</li>
                </ul>
                <p>Projekt wykonany przeze mnie pozwala na wygodnie zlecenie realizacji ogrodu firmie wykonawczej, jak również na swobodną realizację we własnym zakresie.</p>

            </StyledContainer>

            <Slides>
                <Link to="/pytania" className="slide1 slide">
                    <h1>
                        Masz wątpliwości? Zobacz o co pytają klienci
                    </h1>
                </Link>
                <Link to="/portfolio" className="slide2 slide">
                        <h1>Sprawdź moje ostatnie projekty</h1>
                </Link>
            </Slides>

            <Footer />
        </>
    );
};

export default Oferta;
