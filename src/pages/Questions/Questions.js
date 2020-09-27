import React, { useEffect, useState, useContext } from 'react';

import { StyledContainer } from './QuestionsStyles';
import Question from '../../components/Questions/Question/Question';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import dataContext from '../../Context';

const Questions = () => {
  const [questions, setQuestions] = useState([]);
  const data = useContext(dataContext);
  useEffect(() => {
    if (data.questions) setQuestions(data.questions);
  });

  return (
    <>
      <StyledContainer>
        <h1>Pytania</h1>
        {!questions.length ? (
          <p className='loading'>Ładowanie...</p>
        ) : (
          questions.map((question) => {
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
          })
        )}
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
