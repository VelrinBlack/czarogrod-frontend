import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';
import facebook from '../images/facebook-black.svg';
import instagram from '../images/instagram-black.svg';

const StyledFooter = styled.div`
    position: absolute;

    width: 100%;
    height: 500px;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 100px;
    padding: 50px 0;

    background-color: #f2f2f2;

    .container {
        width: 1200px;
        height: 200px;

        display: flex;
        justify-content: space-between;

        a,
        p {
            margin: 0;
            color: #000;
            text-decoration: none;
        }

        .logo {
            width: 200px;
        }

        .box {
            box-sizing: border-box;

            width: 300px;
            height: 200px;
        }
        .contact-data,
        .box {
            a:hover {
                transition: all 0.5s;
                background: #98dad9;
            }
        }
        .menu {
            padding-top: 20px;
        }
        .contact-container {
            padding-top: 20px;

            .contact-data {
                padding-top: 40px;

                a {
                    margin-left: 10px;
                }
            }
            .social-media {
                width: 50px;

                display: flex;
                justify-content: space-between;

                padding-top: 40px;

                .facebook-logo,
                .instagram-logo {
                    width: 15px;
                    height: 15px;
                    display: flex;

                    img {
                        width: 100%;
                        height: 100%;
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

        text-align: center;
        font-size: 12px;
        color: #fff;
    }

    @media (max-width: 1280px) {
        font-size: 14px;

        .container {
            width: 90%;
            height: 200px;

            display: flex;
            justify-content: space-between;
        }
    }

    @media (max-width: 1024px) {
        height: 800px;

        font-size: 16px;

        .container {
            width: 90%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            .logo-box {
                margin: 450px 0 50px 0;
            }

            .logo {
                width: 80%;
            }

            .box {
                box-sizing: border-box;

                width: 300px;
                height: 200px;

                margin-bottom: 50px;

                text-align: center;
            }
            .menu {
                padding-top: 20px;
            }
            .contact-container {
                width: 100%;

                padding-top: 20px;

                .contact-data {
                    padding-top: 40px;

                    a {
                        margin-left: 10px;
                    }
                }
                .social-media {
                    width: 100%;

                    display: flex;
                    justify-content: center;

                    padding-top: 40px;

                    .facebook-logo,
                    .instagram-logo {
                        width: 21px;
                        height: 21px;

                        display: flex;

                        margin: 0 20px;

                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
        }
    }
`;

const Footer = () => {
    return (
        <StyledFooter>
            <div className="container">
                <div className="logo-box box">
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="menu box">
                    <a href="/home">HOME</a>
                    <br />
                    <a href="/oferta">OFERTA</a>
                    <br />
                    <a href="/portfolio">PORTFOLIO</a>
                    <br />
                    <a href="/pytania">PYTANIA</a>
                    <br />
                    <a href="/blog">BLOG</a>
                    <br />
                    <a href="/omnie">O MNIE</a>
                    <br />
                    <a href="/kontakt">KONTAKT</a>
                </div>
                <div className="contact-container box">
                    <p className="text">
                        Skontaktuj się ze mną używając poniższych danych lub
                        wypełnij formularz w zakładce KONTAKT, a ja odezwę się
                        do Ciebie.
                    </p>
                    <div className="contact-data">
                        <p className="phone-number">
                            tel:
                            <a href="tel:++48784880484">+48 784 880 484</a>
                        </p>
                        <p className="mail-address">
                            e-mail:
                            <a href="mailto:kontakt@czarogród.pl">
                                kontakt@czarogród.pl
                            </a>
                        </p>
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
            </div>
            <p className="copyright">© 2020 – Mateusz i Bartosz Wleciał</p>
        </StyledFooter>
    );
};

export default Footer;
