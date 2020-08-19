// react
import React from 'react';
import { Link } from 'react-router-dom';

// external packages
import styled from 'styled-components';
import OwlCarousel from 'react-owl-carousel';

// styles
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

// images
import img1 from '../../images/slider/1.jpg';
import img2 from '../../images/slider/2.jpg';
import img3 from '../../images/slider/3.jpg';
import img4 from '../../images/slider/4.jpg';
import arrow_left from '../../images/slider/arrow-left.svg';
import arrow_right from '../../images/slider/arrow-right.svg';


const StyledCarousel = styled.div`
        margin-top: 150px;

        .owl-theme, .owl-carousel {

            .slide {
                width: 100%;
                height: 630px;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                margin-top: 100px;

                background-size: cover;
                background-position: center;
                
                color: #fff;
                overflow: hidden;

                @media (max-width: 1024px) {
                    margin-top: 190px;
                    height: 500px;
                }
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

            .title {
                width: 100vw;

                display: block;

                padding: 20px;
                background: rgba(0,0,0, .2);

                text-align: center; 
                font-size: 50px;
                font-weight: 700;
                letter-spacing: 2px;

                @media (max-width: 1024px) {
                    font-size: 30px;
                }

                @media (max-width: 786px) {
                    font-size: 25px;
                }
            }

            .btn {
                position: relative;

                width: 150px;
                height: 50px;

                display: flex;
                justify-content: center;
                align-items: center;

                background-color: #399CA1;

                color: #fff;
                font-size: 16px;
                font-weight: 700;
                text-decoration: none;
                letter-spacing: 1.5px;

                border: none;
                border-radius: 4px;
                box-shadow: 0 5px 10px 5px rgba(0,0,0, .2);

                cursor: pointer;
                overflow: hidden;
                z-index: 0;
                
                @media (max-width: 1024px) {
                    width: 140px;
                    height: 45px;
                }

                &::before {
                    content: '';

                    position: absolute;
                    top: 0;
                    left: 0;

                    width: 100%;
                    height: 100%;

                    background-color: #fff;

                    transform: translateX(-100%);
                    transition: transform .3s;
                    z-index: -1;
                }
                
                &:hover {
                    color: #399CA1;

                    &::before {
                        transform: translateX(0);
                    }
                }

                &:focus {
                    outline: none;
                }
            }

            .owl-dots {
                position: absolute;
                bottom: 40px;

                width: 100%;

                @media (max-width: 1024px) {
                    display: none;
                }

                .owl-dot {
                    width: 25px;
                    height: 25px;

                    outline: none;

                    &:hover span {
                        opacity: 1;
                        background-color: #fff !important;
                    }

                    &.active span {
                        background-color: #fff !important;
                        opacity: 1;
                    }

                    &:focus {
                        outline: none;
                    }

                    span {
                        width: 15px;
                        height: 15px;

                        background-color: #fff;
                        opacity: 0.5;

                        transition: 0.3s all;
                    }
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
                    width: 50px;
                    height: 50px;

                    @media (max-width: 1024px) {
                        display: none;
                    }

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
    `;

const Slider = () => {
    const settings = {
        className: 'owl-theme owl carousel',
        items: 1,
        autoplay: true,
        loop: true,
        nav: true,
        autoplayHoverPause: true
    };

    return (
        <StyledCarousel>
            <OwlCarousel {...settings}>

                <div className='slide slide1'>
                    <h1 className='title'>Zobacz jak pracujemy</h1>

                    <Link to='/oferta' className='btn btn1'>
                        OFERTA
                    </Link>
                </div>

                <div className='slide slide2'>
                    <h1 className='title'>Każde miejsce można zaczarować</h1>

                    <Link to='/portfolio' className='btn btn2'>
                        PORTFOLIO
                    </Link>
                </div>

                <div className='slide slide3'>
                    <h1 className='title'> Masz wątpliwości? <br /> Zobacz o co pytają klienci</h1>

                    <Link to='/pytania' className='btn btn3'>
                        PYTANIA
                    </Link>
                </div>

                <div className='slide slide4'>
                    <h1 className='title'>Zadzwoń lub napisz – służę pomocą</h1>
                    <Link to='/kontakt' className='btn btn4'>
                        KONTAKT
                    </Link>
                </div>
                
            </OwlCarousel>
        </StyledCarousel>
    );
};

export default Slider;
