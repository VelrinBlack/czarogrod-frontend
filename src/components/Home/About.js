// react
import React, { useState, useEffect } from 'react';

// external packages
import styled from 'styled-components';
import axios from 'axios';
import ReactMarkdown from 'react-markdown'

// images
import portrait from '../../images/other/profile.jpg';


const StyledAbout = styled.div`
    width: 100%;
    height: 1000px;
    
    display: flex;
    justify-content: center;

    margin: 150px auto 100px auto;

    background-color: #f2f2f2;

    @media (max-width: 1024px) { height: 1400px; }
    @media (max-width: 599px) { height: 1600px; }

    .container {
        width: 80%;

        display: flex;
        justify-content: space-between;

        @media (max-width: 1024px) {
            flex-direction: column;
            align-items: center;

            margin: 90px auto;
        }

        @media (max-width: 768px) {
            width: 90%;
        }

        .text-container {
            width: 40%;

            display: flex;
            flex-direction: column;
            justify-content: center;

            @media (max-width: 1280px) {
                width: 45%;
            }
            @media (max-width: 1024px) {
                width: 70%;
                text-align: center;
            }
            @media (max-width: 768px) {
                width: 100%;
                text-align: start;
            }

            h2 {
                margin-bottom: 10px;
                font-size: 50px;
            }

            p {
                font-size: 16px;
                line-height: 25px;
            }
        }

        .image-container {
            width: 500px;

            display: flex;
            align-items: center;
            justify-content: right;

            @media (max-width: 1400px) { width: 400px; }
            @media (max-width: 1024px) { width: 350px; }
            @media (max-width: 599px) { width: 80%; }

            img {
                width: 100%;
                z-index: 1;
                box-shadow: 25px 25px 0 0 #399ca1;

                @media (max-width: 1024px) {
                    margin-top: 50px;
                    box-shadow: 20px 20px 0 0 #399ca1;
                }
                @media (max-width: 599px) {
                    margin-top: 0;
                    box-shadow: 15px 15px 0 0 #399ca1;
                }
            }
        }
    }
`;

const About = () => {

    const [data, setData] = useState('')

    useEffect(() => {
        // get data from api
        axios.get('https://czarogrod-backend-strapi.herokuapp.com/about')
        .then(data => {
            setData(data.data.content)
            window.scroll({
                top: 900,
                behavior: 'smooth'
            });
        })
    }, [])

    return (
        <StyledAbout>
            <div className='container'>
                <div className='text-container'>
                    <h2>O mnie</h2>
                    <ReactMarkdown source={data} />
                </div>
                <div className='image-container'>
                    <img src={portrait} alt='Mój portret' />
                </div>
            </div>
        </StyledAbout>
    );
};

export default About;
