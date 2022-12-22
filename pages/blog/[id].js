import React from 'react';
import Head from 'next/head';

import Article from '../../src/pages/Article/Article';
import Header from '../../src/components/Header/Header';
import Footer from '../../src/components/Footer/Footer';

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

Post.getInitialProps = async function (ctx) {
  const res = await fetch(
    `https://czarogrod-backend-strapi-2.herokuapp.com/posts/${ctx.query.id}`
  );
  const article = await res.json();

  return {
    article,
  };
};

export default Post;
