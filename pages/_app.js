import React from 'react';
import Head from 'next/head';

import './styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta property='og:image' content='/images/other/logo.png' />
        <meta property='og:image:secure_url' content='/images/other/logo.png' />
        <title>Czarogród</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
