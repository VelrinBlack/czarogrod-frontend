import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Card from '../components/Portfolio/Card';

import img1 from '../images/1.jpg';
import img2 from '../images/2.jpg';
import img3 from '../images/3.jpg';
import img4 from '../images/4.jpg';

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
    return (
        <>
            <Header />
            <StyledContainer>
                <h1>Portfolio</h1>
                <div className="cardsContainer">
                    <Card
                        src={img1}
                        alt="img1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum odio et elit finibus, quis commodo leo congue. Pellentesque rhoncus dignissim augue sed feugiat. Suspendisse dui dui, accumsan et purus id, finibus pellentesque lacus. Cras pretium consequat quam et maximus. Nulla nec hendrerit lacus."
                    />
                    <Card
                        src={img2}
                        alt="img2"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum odio et elit finibus, quis commodo leo congue. Pellentesque rhoncus dignissim augue sed feugiat. Suspendisse dui dui, accumsan et purus id, finibus pellentesque lacus. Cras pretium consequat quam et maximus. Nulla nec hendrerit lacus."
                    />
                    <Card
                        src={img3}
                        alt="img3"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum odio et elit finibus, quis commodo leo congue. Pellentesque rhoncus dignissim augue sed feugiat. Suspendisse dui dui, accumsan et purus id, finibus pellentesque lacus. Cras pretium consequat quam et maximus. Nulla nec hendrerit lacus."
                    />
                    <Card
                        src={img4}
                        alt="img4"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum odio et elit finibus, quis commodo leo congue. Pellentesque rhoncus dignissim augue sed feugiat. Suspendisse dui dui, accumsan et purus id, finibus pellentesque lacus. Cras pretium consequat quam et maximus. Nulla nec hendrerit lacus."
                    />
                    <Card
                        src={img1}
                        alt="img1"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum odio et elit finibus, quis commodo leo congue. Pellentesque rhoncus dignissim augue sed feugiat. Suspendisse dui dui, accumsan et purus id, finibus pellentesque lacus. Cras pretium consequat quam et maximus. Nulla nec hendrerit lacus."
                    />
                    <Card
                        src={img2}
                        alt="img2"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum odio et elit finibus, quis commodo leo congue. Pellentesque rhoncus dignissim augue sed feugiat. Suspendisse dui dui, accumsan et purus id, finibus pellentesque lacus. Cras pretium consequat quam et maximus. Nulla nec hendrerit lacus."
                    />
                    <Card
                        src={img3}
                        alt="img3"
                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum odio et elit finibus, quis commodo leo congue. Pellentesque rhoncus dignissim augue sed feugiat. Suspendisse dui dui, accumsan et purus id, finibus pellentesque lacus. Cras pretium consequat quam et maximus. Nulla nec hendrerit lacus."
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
