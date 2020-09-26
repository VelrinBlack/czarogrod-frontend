import React from 'react';
import Link from 'next/link';
import Helmet from 'react-helmet';

import { StyledContainer } from './SliderStyles';

import Carousel from 'react-slick';

const Slider = () => {
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
      <Helmet>
        <link
          rel='stylesheet'
          type='text/css'
          charset='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Helmet>

      <StyledContainer>
        <Carousel {...settings}>
          <div className='slide slide1'>
            <h1 className='title'>Zobacz jak projektujemy</h1>

            <Link href='/oferta'>
              <div className='btn btn1'>OFERTA</div>
            </Link>
          </div>

          <div className='slide slide2'>
            <h1 className='title'>Każde miejsce można zaczarować</h1>

            <Link href='/portfolio'>
              <div className='btn btn2'>PORTFOLIO</div>
            </Link>
          </div>

          <div className='slide slide3'>
            <h1 className='title'>
              {' '}
              Masz wątpliwości? <br /> Zobacz o co pytają klienci
            </h1>

            <Link href='/pytania'>
              <div className='btn btn3'>PYTANIA</div>
            </Link>
          </div>

          <div className='slide slide4'>
            <h1 className='title'>Zadzwoń lub napisz – służę pomocą</h1>
            <Link href='/kontakt'>
              <div className='btn btn4'>KONTAKT</div>
            </Link>
          </div>
        </Carousel>
      </StyledContainer>
    </>
  );
};

export default Slider;
