import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import img1 from '../images/3.jpg';
import img2 from '../images/2.jpg';

const StyledContainer = styled.div`
    margin-top: 350px;
    height: 2000px;
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
        background-image: url(${img1});
    }
    .slide2 {
        background-image: url(${img2});
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

const Oferta = () => {
    return (
        <>
            <Header />
            <StyledContainer>
                <h1>oferta</h1>
                <Slides>
                    <Link to="/pytania" style={{ textDecoration: 'none' }}>
                        <div className="slide1 slide">
                            <h1>
                                Masz wątpliwości? Zobacz o co pytają klienci
                            </h1>
                        </div>
                    </Link>
                    <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                        <div className="slide2 slide">
                            <h1>Sprawdź moje ostatnie projekty</h1>
                        </div>
                    </Link>
                </Slides>
            </StyledContainer>
            <Footer />
        </>
    );
};

export default Oferta;
