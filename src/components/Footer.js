// react
import React from 'react';
import { Link } from 'react-router-dom'

// external libraries
import styled from 'styled-components';

// images
import logo from '../images/other/logo.png';
import facebook from '../images/social_media/facebook.svg';
import instagram from '../images/social_media/instagram.svg';

const StyledFooter = styled.div`
    position: relative;

    width: 100%;
    height: 500px;

    display: flex;
    justify-content: center;

    padding-bottom: 20px;

    background-color: #f2f2f2;

    @media (max-width: 1024px) { height: 1200px; }
    @media (max-width: 768px) { height: 1000px; }

    .container {
        width: 80%;

        display: flex;
        justify-content: space-between;

        margin: 0 auto;

        @media (max-width: 1024px) {
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
        }
        
        .box {
            width: 25%;

            @media (max-width: 1024px) { width: 60%; }
            @media (max-width: 768px) { width: 90%; }
            @media (max-width: 500px) { width: 100%; }

            &.logo-box {
                width: 20%;
                display: flex;
                align-items: center;

                @media (max-width: 1024px) { width: 50%; }
                @media (max-width: 500px) { width: 60%; }

                .logo {
                    width: 100%;
                    margin-bottom: 30px;
                }
            }
            

            &.menu-box {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .link {
                    padding: 6px 0;

                    color: #000;
                    font-size: 18px;
                    text-decoration: none;
                }
            }

            &.contact-box {

                display: flex;
                flex-direction: column;
                justify-content: center;

                text-align: center;

                .contact-data {
                    margin-bottom: 50px;

                    .phone-number {
                        font-size: 14px;
                        a {
                            color: #000;
                            font-size: 18px;
                            text-decoration: none;
                        }
                    }

                    .email-address {
                        font-size: 14px;
                        a {
                            color: #000;
                            font-size: 18px;
                            text-decoration: none;
                        }
                    }
                }

                .social-media {
                    height: 80px;
                    display: flex;
                    justify-content: space-around;

                    @media (max-width: 1920px) { height: 60px; }
                    @media (max-width: 1440px) { height: 50px; }
                    @media (max-width: 1024px) { height: 70px; }
                    @media (max-width: 768px) { height: 60px; }

                    .link {
                        width: 40%;

                        display: flex;
                        justify-content: center;

                        background-color: #399ca1;
                        border-radius: 10px;

                        .logo {
                            width: 20%;

                            @media (max-width: 1440px) { width: 25%; }
                            @media (max-width: 768px) { width: 20%; }
                            @media (max-width: 500px) { width: 30%; }
                        }
                    }
                }
            }
        }
    }

    .copyright {
        position: absolute;
        bottom: 0;

        width: 100%;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        margin: 0;

        background-color: #4f4f4f;

        font-size: 12px;
        color: #fff;
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="container">
                <div className="logo-box box">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="menu-box box">
                    <Link to="/home" className='link'>HOME</Link>
                    <Link to="/oferta" className='link'>OFERTA</Link>
                    <Link to="/portfolio" className='link'>PORTFOLIO</Link>
                    <Link to="/pytania" className='link'>PYTANIA</Link>
                    <Link to="/blog" className='link'>BLOG</Link>
                    <Link to="/omnie" className='link'>O MNIE</Link>
                    <Link to="/kontakt" className='link'>KONTAKT</Link>
                </div>
                <div className="contact-box box">
                    <p className="text">
                        Skontaktuj się ze mną używając poniższych danych lub
                        wypełnij formularz w zakładce KONTAKT, a ja odezwę się
                        do Ciebie.
                    </p>
                    <div className="contact-data">
                        <p className="phone-number">
                            nr telefonu:
                            <br/>
                            <a href="tel:++48784880484">+48 784 880 484</a>
                        </p>
                        <p className="email-address">
                            adres e-mail:
                            <br/>
                            <a href="mailto:kontakt@czarogród.pl">kontakt@czarogród.pl</a>
                        </p>
                    </div>
                    <div className="social-media">
                        <a
                            href="https://www.facebook.com/Czarogrodpl-108508777589942"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            <img src={facebook} alt="facebook logo"  className='logo'/>
                        </a>
                        <a
                            href="https://www.instagram.com/czarogrod.pl/?hl=pl"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link"
                        >
                            <img src={instagram} alt="instagram logo" className='logo'/>
                        </a>
                    </div>
                </div>
            </div>
            <p className="copyright">© 2020 – Mateusz i Bartosz Wleciał</p>
        </StyledFooter>
    );
};

export default Footer;