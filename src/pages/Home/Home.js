import React from 'react';
import PropTypes from 'prop-types';

import Slider from '../../components/Home/Slider/Slider';
import About from '../../components/Home/About/About';
import Offer from '../../components/Home/Offer/Offer';
import Portfolio from '../../components/Home/Portfolio/Portfolio';
import News from '../../components/Home/News/News';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

const Home = ({ data: { posts, portfolioCards } }) => {
  return (
    <>
      <Slider />
      <About />
      <Offer />
      <Portfolio data={portfolioCards} />
      <SingleSlide
        image='/images/slider/3.webp'
        location='/pytania'
        text='Sprawdź, o co pytają klienci'
      />
      <SingleSlide
        image='/images/slider/4.webp'
        location='/kontakt'
        text='Masz więcej pytań? Zadzwoń lub napisz'
      />
    </>
  );
};

Home.propTypes = {
  location: PropTypes.object,
};

export default Home;
