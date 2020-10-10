import React, { useState, useEffect } from 'react';
import Head from 'next/head';

import ReactGA from 'react-ga';

import './styles.css';

import {
  fetchArticles,
  fetchOffer,
  fetchPortfolio,
  fetchQuestions,
} from '../src/utilities/apiCalls';

import dataContext from '../src/Context';

const App = (props) => {
  useEffect(() => {
    ReactGA.initialize('UA-172534345-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <Head>
        <link rel='icon' href='https://czarogrod.pl/images/other/logo.png' />
      </Head>
      <dataContext.Provider
        value={{
          articles: props.posts,
          offer: props.offer,
          portfolio: props.portfolio_cards,
          questions: props.questions,
        }}
      >
        <props.Component {...props.pageProps} />
      </dataContext.Provider>
    </>
  );
};

App.getInitialProps = async (ctx) => {
  const data = await Promise.all([
    fetch('https://czarogrod-backend-strapi.herokuapp.com/posts').then((res) =>
      res.json(),
    ),
    fetch('https://czarogrod-backend-strapi.herokuapp.com/offer').then((res) =>
      res.json(),
    ),
    fetch(
      'https://czarogrod-backend-strapi.herokuapp.com/portfolio-cards',
    ).then((res) => res.json()),
    fetch(
      'https://czarogrod-backend-strapi.herokuapp.com/questions',
    ).then((res) => res.json()),
  ]);

  return {
    posts: data[0],
    offer: data[1],
    portfolio_cards: data[2],
    questions: data[3],
  };
};

export default App;
