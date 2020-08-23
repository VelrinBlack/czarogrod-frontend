// react
import React, { useState, useEffect } from 'react';

// external packages
import styled from 'styled-components';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import SingleSlide from '../components/SingleSlide';

// images
import img1 from '../images/slider/3.jpg';
import img2 from '../images/slider/2.jpg';

const StyledContainer = styled.div`
    width: 70%;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 90%;
    }

    .loading {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
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


const Oferta = () => {

    const [data, setData] = useState('loading')

    useEffect(() => {
        // scroll to the top
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

        // load data from api
        axios.get('https://czarogrod-backend-strapi.herokuapp.com/offer')
        .then(data => {
            return setData(data.data.content)
        })
    }, [])

    return (
        <>
            <Header />

            <StyledContainer>
                <h1>Oferta</h1>

                {
                    data === 'loading' ? <p className='loading'>Ładowanie...</p> : <ReactMarkdown source={data}/>
                }
                
            </StyledContainer>

            <SingleSlide
                text='Masz wątpliwości? Zobacz o co pytają klienci'
                location='/pytania'
                image={img1}
            />

            <SingleSlide
                text='Sprawdź moje ostatnie projekty'
                location='/portfolio'
                image={img2}
            />

            <Footer />
        </>
    );
};

export default Oferta;
