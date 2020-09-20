import React from 'react';
import Helmet from 'react-helmet'

import './styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Helmet>
        <meta property='og:image' content='/images/other/logo.png' />
        <meta property='og:image:secure_url' content='/images/other/logo.png' />
      </Helmet>
      <Component {...pageProps} />
    </>
  );
};

export default App;
