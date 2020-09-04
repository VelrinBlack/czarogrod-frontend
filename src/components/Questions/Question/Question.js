import React from 'react';

import { StyledContainer } from './QuestionStyles';

import leaf from '../../../images/other/leaf.svg';

const Question = (props) => {
  return (
    <StyledContainer>
      <h2>{props.question}</h2>
      <p>{props.anwser}</p>
      {props.leaf ? <img src={leaf} alt='liść' /> : null}
    </StyledContainer>
  );
};

export default Question;
