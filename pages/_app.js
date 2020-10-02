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

const App = ({ Component, pageProps }) => {
  const [contextValue, setContextValue] = useState({});

  useEffect(() => {
    const wrapper = async () => {
      let data = {};

      Promise.all([
        fetchArticles(),
        fetchOffer(),
        fetchPortfolio(),
        fetchQuestions(),
      ]).then(([articles, offer, portfolio, questions]) => {
        setContextValue({
          articles: articles.data,
          offer: offer.data,
          portfolio: portfolio.data,
          questions: questions.data,
        });
      });
    };

    wrapper();
  }, []);

  useEffect(() => {
    ReactGA.initialize('UA-172534345-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <Head>
        <link rel='icon' href='https://czarogrod.pl/images/other/logo.png' />
      </Head>
      <dataContext.Provider value={contextValue}>
        <Component {...pageProps} />
      </dataContext.Provider>
    </>
  );
};

export default App;
