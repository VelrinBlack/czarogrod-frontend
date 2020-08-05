import React from 'react';
import { Link } from 'react-router-dom';

// owl carousel
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

// carousel images, svgs
import img1 from '../../images/1.jpg';
import img2 from '../../images/2.jpg';
import img3 from '../../images/3.jpg';
import img4 from '../../images/4.jpg';
import arrow_left from '../../images/arrow-left.svg';
import arrow_right from '../../images/arrow-right.svg';

import styled from 'styled-components';

const StyledCarousel = styled.div`
        margin-top: 150px;

            .slide {
                height: 700px;
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
            .slide3 {
                background-image: url(${img3});
            }
            .slide4 {
                background-image: url(${img4});
            }

            h1 {
                width: 100vw;

                display: block;

                padding: 20px;
                background: rgba(0,0,0, .2);

                text-align: center; 
                font-size: 50px;
                font-weight: 700;
                letter-spacing: 2px;

            }

            .btn {
                position: relative;

                width: 150px;
                height: 50px;

                display: flex;
                justify-content: center;
                align-items: center;

                text-decoration: none;
                font-size: 16px;
                font-weight: 700;
                letter-spacing: 1.5px;
                color: #fff;

                background: #399CA1;
                border: none;
                border-radius: 4px;
                box-shadow: 0 5px 10px 5px rgba(0,0,0, .2);


                cursor: pointer;
                overflow: hidden;
                z-index: 0;

                &::before {
                    content: '';

                    position: absolute;
                    top: 0;
                    left: 0;

                    width: 0;
                    height: 100%;

                    background-color: #fff;

                    transition: width .3s;
                    z-index: -1;
                }
                &:hover::before {
                    width: 100%;
                }
                &:hover {
                    color: #399CA1;
                }

                &:focus {
                    outline: none;
                    animation: rm-btn-shadow .4s;
                }
            }

            @keyframes rm-btn-shadow {
                0% {
                    box-shadow: 0 5px 10px 5px rgba(0,0,0, .2);  
                } 50% {
                    box-shadow: 0 0 0 0 rgba(0,0,0, .2);
                } 100% {
                    box-shadow: 0 5px 10px 5px rgba(0,0,0, .2);
                }
            }

            .owl-dots {
                position: absolute;
                bottom: 40px;

                width: 100%;

                .owl-dot {
                    width: 25px;
                    height: 25px;

                    outline: none;
                    
                    &:focus {
                        outline: none;
                    }

                    &:hover {
                        span {
                            opacity: 1;
                            background-color: #fff !important;
                        }
                    }
                }
                .owl-dot span {
                    width: 15px;
                    height: 15px;

                    background-color: #fff;
                    opacity: 0.5;

                    transition: 0.3s all;
                }
                .active span {
                    background: #fff !important;
                    opacity: 1;
                }
            }

            .owl-nav {
                position: absolute;
                top: 385px;

                width: 100%;

                display: flex;
                justify-content: space-between;
                
                .owl-prev,
                .owl-next {
                    height: 50px;
                    width: 50px;

                    &:hover {
                        background-color: transparent;
                    }
                    &:focus {
                        outline: none;
                    }
                }

                .owl-prev span {
                    content: url(${arrow_left});
                }
                .owl-next span {
                    content: url(${arrow_right});
                }
            }
        }

        @media (max-width: 1024px) {
            margin-top: 190px;

            
            .slide {
                height: 500px;
            }

            h1 {
                font-size: 30px;   
            }

            .btn {
                font-size: 13px;
            }

            .owl-dots {
                display: none;
            }

            .owl-nav {
                display: none;
            }
        }
    `;

const Slider = () => {
    const settings = {
        className: 'owl-theme',
        items: 1,
        autoplay: true,
        loop: true,
        nav: true,
    };

    return (
        <StyledCarousel>
            <OwlCarousel {...settings} className="owl-carousel owl-theme">
                <div className="slide1 slide">
                    <h1>Zobacz jak pracujemy</h1>

                    <Link className="btn1 btn" to="/oferta">
                        OFERTA
                    </Link>
                </div>
                <div className="slide2 slide">
                    <h1>Każde miejsce można zaczarować</h1>
                    <Link className="btn2 btn" to="/portfolio">
                        PORTFOLIO
                    </Link>
                </div>
                <div className="slide3 slide">
                    <h1>
                        Masz wątpliwości? <br /> Zobacz o co pytają klienci
                    </h1>
                    <Link className="btn3 btn" to="/pytania">
                        PYTANIA
                    </Link>
                </div>
                <div className="slide4 slide">
                    <h1>Zadzwoń lub napisz – służę pomocą</h1>
                    <Link className="btn4 btn" to="/kontakt">
                        KONTAKT
                    </Link>
                </div>
            </OwlCarousel>
        </StyledCarousel>
    );
};

export default Slider;
