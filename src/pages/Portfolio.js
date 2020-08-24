// react
import React, { useState, useEffect } from 'react';

// external packages
import styled from 'styled-components';
import axios from 'axios';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Portfolio/Card';
import SingleSlide from '../components/SingleSlide';

// images for slides
import img3 from '../images/slider/1.jpg';
import img4 from '../images/slider/4.jpg';


const StyledContainer = styled.div`
    width: 80%;
    margin: 0 auto;

    h1 {
        margin-bottom: 100px;

        text-align: center;
        font-size: 50px;
    }

    .cardsContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-column-gap: 40px;
        grid-row-gap: 100px;

        .loading {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        @media (max-width: 1024px) {
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 30px;
            grid-row-gap: 80px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            grid-column-gap: 0px;
            grid-row-gap: 40px;
        }
    }
`;

const Portfolio = () => {

    const [cards, setCards] = useState(['loading'])

    useEffect(() => {
        // scroll to the top
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

        // get portfolio cards data from api
        axios.get('https://czarogrod-backend-strapi.herokuapp.com/portfolio-cards')
        .then(data => setCards(data.data))
    }, [])

    return (
        <>
            <Header />
            <StyledContainer>
                <h1>Portfolio</h1>
                <div className="cardsContainer">

                    {cards.map(card => {
                            if (card === 'loading') return <p className='loading'>Ładowanie...</p>

                            return <Card
                                src={card.Image.url}
                                alt={card.Image.name}
                                text={card.Description}
                            />
                        }
                    )}

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
