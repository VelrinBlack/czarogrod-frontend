import React from 'react';
import Head from 'next/head';

import Article from '../../src/pages/Article/Article';
import Footer from '../../src/components/Footer/Footer';

import dynamic from 'next/dynamic';

const Header = dynamic(
  () => {
    return import('../../src/components/Header/Header');
  },
  { ssr: false },
);

const Post = ({ article }) => (
  <>
    <Head>
      <meta property='og:title' content={article.title} />
      <meta property='og:image' content={article.image.url} />
      <meta property='og:image:secure_url' content={article.image.url} />
      <title>{article.title}</title>
    </Head>
    <Header />
    <Article article={article} />
    <Footer />
  </>
);

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://czarogrod-backend-strapi.herokuapp.com/posts/${context.params.id}`,
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
}

export default Post;
