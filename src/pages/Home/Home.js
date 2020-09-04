import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Slider from '../../components/Home/Slider/Slider';
import About from '../../components/Home/About/About';
import News from '../../components/Home/News/News';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

import img1 from '../../images/slider/2.jpg';
import img2 from '../../images/slider/4.jpg';

const Home = (props) => {
  useEffect(() => {
    if (props.location.pathname === '/omnie') {
      window.scroll({
        top: 700,
        behavior: 'smooth',
      });
    } else {
      window.scroll({
        top: 0,
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

  return (
    <>
      <Slider />
      <About path={props.location.pathname} />
      <News />
      <SingleSlide
        image={img1}
        location='/oferta'
        text='Zobacz szczegóły oferty'
      />
      <SingleSlide
        image={img2}
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
