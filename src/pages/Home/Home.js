import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../../components/Home/Slider/Slider';
import About from '../../components/Home/About/About';
import News from '../../components/Home/News/News';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

const Home = ({ data }) => {
  return (
    <>
      <Slider />
      <About />
      <News data={data} />
      <SingleSlide
        image='/images/slider/1.jpg'
        location='/oferta'
        text='Zobacz szczegóły oferty'
      />
      <SingleSlide
        image='/images/slider/3.jpg'
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
