import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import { StyledContainer } from './AboutStyles';
import dataContext from '../../../Context';

import portrait from '../../../images/other/profile.jpg';

const About = () => {
  const data = useContext(dataContext);

  return (
    <StyledContainer>
      <div className='container'>
        <div className='text-container'>
          <h2>O mnie</h2>
          {data ? (
            <ReactMarkdown source={data.about.content} />
          ) : (
            'Ładowanie...'
          )}
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
