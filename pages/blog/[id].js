import React from 'react';

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
