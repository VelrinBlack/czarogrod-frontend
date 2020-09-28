import React from 'react';
import router from 'next/router';
import PropTypes from 'prop-types';

import { StyledContainer } from './SingleSlideStyles';

const SingleSlide = ({ text, location, image }) => (
  <StyledContainer image={image}>
    <a
      className='slide'
      href={location}
      onClick={(e) => {
        e.preventDefault();
        router.push(location);
        window.scroll({
          top: 0,
          behavior: 'smooth',
        });
      }}
    >
      <h2>{text}</h2>
    </a>
  </StyledContainer>
);

SingleSlide.propTypes = {
  text: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
};

export default SingleSlide;
