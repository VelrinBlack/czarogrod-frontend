import React from 'react';
import Head from 'next/head';

import './styles.css';

const App = ({ Component, pageProps }) => {
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
