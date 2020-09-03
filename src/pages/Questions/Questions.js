import React, { useState, useEffect } from 'react';

import axios from 'axios';

import { StyledContainer } from './QuestionsStyles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Question from '../../components/Pytania/Question';
import SingleSlide from '../../components/SingleSlide';

import img1 from '../../images/slider/3.jpg';
import img2 from '../../images/slider/2.jpg';

const Questions = () => {
  const [data, setData] = useState(['loading']);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    axios
      .get('https://czarogrod-backend-strapi.herokuapp.com/questions')
      .then((data) => setData(data.data));
  }, []);

  return (
    <>
      <Header />
      <StyledContainer>
        <h1>Pytania</h1>

        {data.map((question) => {
          if (question === 'loading')
            return <p className='loading'>Ładowanie...</p>;

          if (data[data.length - 1] === question) {
            return (
              <Question question={question.question} anwser={question.anwser} />
            );
          }

          return (
            <Question
              question={question.question}
              anwser={question.anwser}
              leaf
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

      <Footer />
    </>
  );
};

export default Questions;
