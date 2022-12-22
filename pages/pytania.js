import React from 'react';
import Head from 'next/head';

import Questions from '../src/pages/Questions/Questions';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const Pytania = ({ data }) => (
  <>
    <Head>
      <meta
        property='og:image'
        content='https://czarogrod.pl/images/other/logo.webp'
      />
      <meta
        property='og:image:secure_url'
        content='https://czarogrod.pl/images/other/logo.webp'
      />
      <title>Czarogród | Pytania</title>
    </Head>
    <Header />
    <Questions data={data} />
    <Footer />
  </>
);

Pytania.getInitialProps = async () => {
  const data = await fetch(
    'https://czarogrod-backend-strapi-2.herokuapp.com/questions'
  ).then((res) => res.json());

  return { data };
};

export default Pytania;
