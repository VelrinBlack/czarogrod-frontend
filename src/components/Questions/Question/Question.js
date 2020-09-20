import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './QuestionStyles';

import leaf from '../../../../public/images/other/leaf.svg';

const Question = (props) => {
  return (
    <StyledContainer>
      <h2>{props.question}</h2>
      <p>{props.anwser}</p>
      {props.leaf ? <img src={leaf} alt='liść' /> : null}
    </StyledContainer>
  );
};
Question.propTypes = {
  question: PropTypes.string,
  anwser: PropTypes.string,
  leaf: PropTypes.bool,
};

export default Question;
