import React from 'react';
import { Link } from 'react-router-dom';

import { StyledContainer } from './SliderStyles';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

const Slider = () => {
  const settings = {
    className: 'owl-theme owl-carousel',
    items: 1,
    autoplay: true,
    loop: true,
    nav: true,
  };

  return (
    <StyledContainer>
      <OwlCarousel {...settings}>
        <div className='slide slide1'>
          <h1 className='title'>Zobacz jak projektujemy</h1>

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
          <h1 className='title'>
            {' '}
            Masz wątpliwości? <br /> Zobacz o co pytają klienci
          </h1>

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
    </StyledContainer>
  );
};

export default Slider;
