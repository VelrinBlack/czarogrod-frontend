import React, { useEffect } from 'react';
import Head from 'next/head';

import ReactGA from 'react-ga';

import './styles.css';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    ReactGA.initialize('UA-172534345-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <>
      <Head>
        <link rel='icon' href='https://czarogrod.pl/images/other/logo.png' />
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default App;
