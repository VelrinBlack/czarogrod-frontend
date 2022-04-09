import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Blog from '../src/pages/Blog/Blog';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';

const BlogPage = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const data = await fetch(
      'https://czarogrod-backend-strapi.herokuapp.com/posts'
    ).then((res) => res.json());
    setData(data);
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
        <title>Czarogród | Blog</title>
      </Head>
      <Header />
      <Blog data={data} />
      <Footer />
    </>
  );
};

export default BlogPage;
