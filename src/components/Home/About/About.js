import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import { StyledContainer } from './AboutStyles';

import portrait from '../../../images/other/profile.jpg';

const About = (props) => {
  const [data, setData] = useState('');

  useEffect(() => {
    axios
      .get('https://czarogrod-backend-strapi.herokuapp.com/about')
      .then((data) => {
        setData(data.data.content);
        if (props.path === '/omnie') {
          window.scroll({
            top: 700.001,
            behavior: 'smooth',
          });
        }
      });
  }, [props]);

  return (
    <StyledContainer>
      <div className='container'>
        <div className='text-container'>
          <h2>O mnie</h2>
          <ReactMarkdown source={data} />
        </div>
        <div className='image-container'>
          <img src={portrait} alt='Mój portret' />
        </div>
      </div>
    </StyledContainer>
  );
};

About.propTypes = {
  path: PropTypes.string,
};

export default About;
