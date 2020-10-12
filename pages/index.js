import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Home from '../src/pages/Home/Home';
import Footer from '../src/components/Footer/Footer';

import dynamic from 'next/dynamic';
import axios from 'axios';

const isServer = () => typeof window === 'undefined';
const getPosts = () => {
  return axios
    .get('http://czarogrod-backend-strapi.herokuapp.com/posts')
    .then((response) => response.data);
};

const Header = dynamic(
  () => {
    return import('../src/components/Header/Header');
  },
  { ssr: false },
);

const Index = ({ data }) => {
  const [posts, setPosts] = useState(data);

  useEffect(() => {
    if (data === null) {
      getPosts().then(setPosts);
    }
  }, []);
  return (
    <>
      <Head>
        <meta
          property='og:image'
          content='https://czarogrod.pl/images/other/logo.png'
        />
        <meta
          property='og:image:secure_url'
          content='https://czarogrod.pl/images/other/logo.png'
        />
        <title>Czarogród</title>
      </Head>
      <Header />
      <Home data={posts} />
      <Footer />
    </>
  );
};

Index.getInitialProps = async () => {
  if (isServer()) {
    return {
      data: await getPosts(),
    };
  } else {
    return {
      data: null,
    };
  }
};

export default Index;
