import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../../components/Home/Slider/Slider';
import About from '../../components/Home/About/About';
import News from '../../components/Home/News/News';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

const Home = () => {
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
