// react
import React from 'react';

// external libraries
import styled from 'styled-components';

// images
import phone from '../images/phone.svg';
import mail from '../images/mail.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';


const StyledTopBar = styled.div`
    position: fixed;
    top: 0;

    width: 100%;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #399ca1;

    z-index: 3;

    @media (max-width: 768px) { height: 68px; }

    .container {
        width: 80%;
        height: 20px;

        display: flex;
        justify-content: space-between;

        @media (max-width: 1280px) { width: 90%; }
        @media (max-width: 768px) {
            height: 100%;
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
        }

        .contact {
            width: 400px;

            display: flex;
            justify-content: space-between;

            @media (max-width: 768px) {
                width: 50%;
                height: 100%;

                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }

            .contact-phone,
            .contact-mail {
                display: flex;
                align-items: center;

                @media (max-width: 768px) { height: 35%; }
                @media (max-width: 500px) {
                    margin-left: 40px;
                    width: 200px;
                }

                .phone-number,
                .mail-address {
                    margin-left: 10px;
                    color: #fff;

                    a {
                        text-decoration: none;
                        color: #fff;
                    }
                }

                .icon {
                    width: 15px;
                }
            }
        }

        .social-media {
            width: 50px;

            display: flex;
            justify-content: space-between;
            align-items: center;

            @media (max-width: 768px) {
                width: 50%;
                justify-content: center;
            }

            @media (max-width: 500px) {
                width: 20%;
                margin-left: 50px;
            }

            .facebook-logo,
            .instagram-logo {
                width: 15px;
                height: 15px;

                display: flex;
                align-items: center;

                @media (max-width: 768px) { margin-left: 17px; }

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
`;

const TopBar = () => {
    return (
        <StyledTopBar>
            <div className="container">

                <div className="contact">

                    <div className="contact-phone">

                        <a href="tel:++48784880484">
                            <img
                                src={phone}
                                alt="telefon"
                                className="icon"
                            />
                        </a>

                        <p className="phone-number">
                            <a href="tel:++48784880484">+48 784 880 484</a>
                        </p>

                    </div>

                    <div className="contact-mail">

                        <a href="mailto:kontakt@czarogród.pl">
                            <img
                                src={mail}
                                alt="mail"
                                className="icon"
                            />
                        </a>

                        <p className="mail-address">
                            <a href="mailto:kontakt@czarogród.pl">
                                kontakt@czarogród.pl
                            </a>
                        </p>

                    </div>

                </div>

                <div className="social-media">

                    <a
                        href="https://www.facebook.com/Czarogrodpl-108508777589942"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="facebook-logo"
                    >
                        <img src={facebook} alt="facebook" />
                    </a>

                    <a
                        href="https://www.instagram.com/czarogrod.pl/?hl=pl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="instagram-logo"
                    >
                        <img src={instagram} alt="instagram" />
                    </a>
                    
                </div>
            </div>
        </StyledTopBar>
    );
};

export default TopBar;
