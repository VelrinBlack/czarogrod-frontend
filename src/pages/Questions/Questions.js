import React, { useEffect, useState, useContext } from 'react';

import { StyledContainer } from './QuestionsStyles';
import Question from '../../components/Questions/Question/Question';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

const Questions = ({ data }) => {
  return (
    <>
      <StyledContainer>
        <h1>Pytania</h1>
        {data.map((question) => {
          if (data[data.length - 1] === question) {
            return (
              <Question
                question={question.question}
                anwser={question.anwser}
                key={question.id}
              />
            );
          }

          return (
            <Question
              question={question.question}
              anwser={question.anwser}
              leaf
              key={question.id}
            />
          );
        })}
      </StyledContainer>

      <SingleSlide
        text='Sprawdź przykładowe projekty'
        location='/portfolio'
        image='/images/slider/3.jpg'
      />

      <SingleSlide
        text='Masz więcej pytań? Zadzwoń lub napisz'
        location='/kontakt'
        image='/images/slider/2.jpg'
      />
    </>
  );
};

export default Questions;
