import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledContainer } from './SingleSlideStyles';

const SingleSlide = ({ text, location, image }) => (
  <StyledContainer image={image}>
    <Link to={location} className='slide'>
      <h2>{text}</h2>
    </Link>
  </StyledContainer>
);

SingleSlide.propTypes = {
  text: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
};

export default SingleSlide;
