import React from "react";
import PropTypes from "prop-types";
import Image from "next/image";

import { StyledContainer } from "./SingleSlideStyles";

const SingleSlide = ({ text, location, image }) => (
  <StyledContainer image={image}>
    <Image className="background" src={image} alt="background" layout="fill" />
    <a className="slide" href={location}>
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
