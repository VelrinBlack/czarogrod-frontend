import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { StyledContainer } from './AboutStyles';
import { fetchAbout } from '../../../utilities/apiCalls';

import portrait from '../../../images/other/profile.jpg';

const About = (props) => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchAbout(props).then((res) => setData(res.data.content));
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
