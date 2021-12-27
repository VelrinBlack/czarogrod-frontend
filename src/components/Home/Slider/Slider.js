import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import Head from 'next/head';

import { StyledContainer } from './SliderStyles';

import Carousel from 'react-slick';

const Slider = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  });

  const settings = {
    className: 'carousel',
    dots: true,
    arrows: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <StyledContainer>
      <Carousel {...settings}>
        <a href={'/oferta'} className='slide slide1'>
          <h1 className='title'>Zobacz jak projektujemy</h1>

          <a
            className={'btn btn1'}
            href={'/oferta'}
            onClick={(e) => {
              e.preventDefault();
              Router.push('/oferta');
              window.scroll({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            OFERTA
          </a>
        </a>

        <a className='slide slide2' href={'/portfolio'}>
          <h1 className='title'>Każde miejsce można zaczarować</h1>

          <a
            className={'btn btn2'}
            href={'/portfolio'}
            onClick={(e) => {
              e.preventDefault();
              Router.push('/portfolio');
              window.scroll({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            PORTFOLIO
          </a>
        </a>

        <a className='slide slide3' href={'/pytania'}>
          <h1 className='title'>
            Masz wątpliwości? <br /> Zobacz o co pytają klienci
          </h1>
          <a
            className={'btn btn3'}
            href={'/pytania'}
            onClick={(e) => {
              e.preventDefault();
              Router.push('/pytania');
              window.scroll({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            PYTANIA
          </a>
        </a>

        <a className='slide slide4' href={'/kontakt'}>
          <h1 className='title'>Zadzwoń lub napisz – służę pomocą</h1>
          <a
            className={'btn btn4'}
            href={'/kontakt'}
            onClick={(e) => {
              e.preventDefault();
              Router.push('/kontakt');
              window.scroll({
                top: 0,
                behavior: 'smooth',
              });
            }}
          >
            KONTAKT
          </a>
        </a>
      </Carousel>
    </StyledContainer>
  );
};

export default Slider;
