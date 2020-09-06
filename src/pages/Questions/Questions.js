import React, { useEffect, useContext } from 'react';

import { StyledContainer } from './QuestionsStyles';
import Question from '../../components/Questions/Question/Question';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import dataContext from '../../Context';

import img1 from '../../images/slider/3.jpg';
import img2 from '../../images/slider/2.jpg';

const Questions = () => {
  const data = useContext(dataContext);

  let questions = [];
  if (data) {
    questions = data.questions;
  }

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <>
      <StyledContainer>
        <h1>Pytania</h1>

        {questions.length === 0
          ? 'Ładowanie...'
          : questions.map((question) => {
              if (questions[questions.length - 1] === question) {
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
        image={img1}
      />

      <SingleSlide
        text='Masz więcej pytań? Zadzwoń lub napisz'
        location='/kontakt'
        image={img2}
      />
    </>
  );
};

export default Questions;
