// react
import React, { useState, useEffect } from 'react';

// external packages
import styled from 'styled-components';
import axios from 'axios';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Question from '../components/Pytania/Question';
import SingleSlide from '../components/SingleSlide';

// images
import img from '../images/slider/4.jpg';


const StyledContainer = styled.div`
    width: 50%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 350px auto 0 auto;

    h1 {
        margin-bottom: 100px;
        font-size: 50px;

        @media (max-width: 1024px) { margin-top: 170px; }
    }

    @media (max-width: 1280px) { width: 70% }
    @media (max-width: 1024px) { width: 80% }
    @media (max-width: 768px) { width: 90% }
`;

const Pytania = () => {

    const [data, setData] = useState(['loading'])

    useEffect(() => {
        // scroll to the top
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

        // load data from api
        axios.get('https://czarogrod-backend-strapi.herokuapp.com/questions')
        .then(data => setData(data.data))
    }, [])

    return (
        <>
            <Header />
            <StyledContainer>
                <h1>Pytania</h1>

                {
                    data.map(question => {
                        if (question === 'loading') return <p className='loading'>Ładowanie...</p>

                        if (data[data.length - 1] === question) {
                            return (
                                <Question 
                                    question={question.question}
                                    anwser={question.anwser}
                                /> 
                            )
                        }

                        return (
                            <Question 
                                question={question.question}
                                anwser={question.anwser}
                                leaf
                            /> 
                        ) 
                    })
                }

            </StyledContainer>

            <SingleSlide
                text='Masz więcej pytań? Zadzwoń lub napisz'
                location='/kontakt'
                image={img}
            />

            <Footer />
        </>
    );
};

export default Pytania;
