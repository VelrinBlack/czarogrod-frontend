import React, { useEffect } from 'react';

import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { fetchNews } from '../../utilities/apiCalls';
import axios from 'axios';

import Slider from '../../components/Home/Slider/Slider';
import About from '../../components/Home/About/About';
import News from '../../components/Home/News/News';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

import Context from '../../Context';

const Home = () => {
  const router = useRouter();

  if (process.browser) {
    useEffect(() => {
      if (router.pathname === '/omnie') {
        window.scroll({
          top: 701,
          behavior: 'smooth',
        });
      }

      document.addEventListener('scroll', setURL);

      return () => document.removeEventListener('scroll', setURL);
    });

    const setURL = () => {
      if (window.pageYOffset >= 650 && window.pageYOffset < 1800) {
        window.history.pushState('O mnie', 'O mnie', '/omnie');
      } else {
        window.history.pushState('Home', 'Home', '/');
      }
    };
  }

  return (
    <>
      <Slider />

      <About />
      <News />
      <SingleSlide
        image='/images/slider/4.jpg'

        location='/oferta'
        text='Zobacz szczegóły oferty'
      />
      <SingleSlide
        image='/images/slider/2.jpg'
        location='/pytania'
        text='Sprawdź, o co pytają klienci'
      />
    </>
  );
};

Home.propTypes = {
  location: PropTypes.object,
};

export default Home;
