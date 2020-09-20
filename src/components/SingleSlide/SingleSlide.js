import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { StyledContainer } from './SingleSlideStyles';

const SingleSlide = ({ text, location, image }) => (
  <StyledContainer image={image}>
    <Link href={location}>
      <div className='slide'>
        <h2>{text}</h2>
      </div>
    </Link>
  </StyledContainer>
);

SingleSlide.propTypes = {
  text: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
};

export default SingleSlide;
