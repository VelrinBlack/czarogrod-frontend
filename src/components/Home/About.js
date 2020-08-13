// react
import React from 'react';

// external packages
import styled from 'styled-components';

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
    return (
        <>
            <StyledAbout>
                <div className='container'>
                    <div className='text-container'>
                        <h2>O mnie</h2>
                        <p>
                            Dzień dobry. Witaj w Czarogrodzie. Razem
                            odmienimy Twój ogród!
                            <br/>
                            <br/>
                            Nazywam się Agnieszka Lizończyk i z
                            chęcią zaczaruję każdy zielony zakątek, nawet
                            ten najmniejszy.
                            <br/>
                            <br/>
                            Ostatnie kilkanaście lat przepracowałam w
                            korporacji, nieobce mi są pojęcia analizy
                            finansowej, czy przygotowywania budżetu. Excel i
                            Power Point nie mają przede mną żadnych
                            tajemnic.
                            <br/>
                            <br/>
                            Jednak moją największa pasją są ogrody i
                            dziś mogę się szczycić tytułem architekta
                            krajobrazu. W każdy projekt wkładam swoje serce
                            i zapał, zawsze dbam o to, by koncepcja była
                            indywidualnie dopasowana do potrzeb odbiorcy.
                            <br/>
                            <br/>
                            Zapraszam do współpracy, razem możemy wyczarować
                            Twój idealny ogród, balkon lub taras.
                            <br/>
                            <br/>
                            Działam na terenie województwa
                            małopolskiego i śląskiego, jednak w przypadku
                            mniejszych projektów z innych części Polski, z
                            chęcią podejmę się współpracy z Tobą w sposób
                            zdalny.
                        </p>
                    </div>
                    <div className='image-container'>
                        <img src={portrait} alt='Mój portret' />
                    </div>
                </div>
            </StyledAbout>
        </>
    );
};

export default About;
