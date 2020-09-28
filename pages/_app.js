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
    window.onpopstate = function (e) {
      if (e.state === 'Home') window.location.reload();
      window.scroll({ top: 0, behavior: 'smooth' });
    };

    const wrapper = async () => {
      let data = {};

      const fetchData = () => {
        return Promise.all([
          fetchArticles().then((res) => (data.articles = res.data)),
          fetchOffer().then((res) => (data.offer = res.data)),
          fetchPortfolio().then((res) => (data.portfolio = res.data)),
          fetchQuestions().then((res) => (data.questions = res.data)),
        ]);
      };
      await fetchData();
      setContextValue(data);
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
