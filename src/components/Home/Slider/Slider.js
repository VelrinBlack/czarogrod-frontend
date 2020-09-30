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
    <>
      <Head>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>

      <StyledContainer>
        <Carousel {...settings}>
          <div
            className='slide slide1'
            onClick={
              isMobile
                ? () => {
                    Router.push('/oferta');
                    window.scroll({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }
                : null
            }
          >
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
          </div>

          <div
            className='slide slide2'
            onClick={
              isMobile
                ? () => {
                    Router.push('/portfolio');
                    window.scroll({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }
                : null
            }
          >
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
          </div>

          <div
            className='slide slide3'
            onClick={
              isMobile
                ? () => {
                    Router.push('/pytania');
                    window.scroll({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }
                : null
            }
          >
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
          </div>

          <div
            className='slide slide4'
            onClick={
              isMobile
                ? () => {
                    Router.push('/kontakt');
                    window.scroll({
                      top: 0,
                      behavior: 'smooth',
                    });
                  }
                : null
            }
          >
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
          </div>
        </Carousel>
      </StyledContainer>
    </>
  );
};

export default Slider;
