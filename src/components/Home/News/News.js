import React, { useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import { StyledContainer } from './NewsStyles';
import Post from '../../Blog/Article/Article';
import dataContext from '../../../Context';

const News = () => {
  const router = useRouter();
  let articles = useContext(dataContext).articles;

  if (articles) {
    articles = articles.reverse();
    articles = [articles[0], articles[1]];
  }

  return (
    <StyledContainer>
      <>
        <h1 className='heading'>Najnowsze wpisy</h1>
        <div className='posts'>
          {!articles
            ? 'Ładowanie...'
            : articles.map((post) => {
                return (
                  <Post
                    image={post.image.url}
                    title={post.title}
                    content={post.content}
                    key={post.id}
                    id={post.id}
                  />
                );
              })}
        </div>

        <a
          className='see-more'
          href={`/blog`}
          onClick={(e) => {
            e.preventDefault();
            router.push(`/blog`);
            window.scroll({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          Zobacz więcej
        </a>
      </>
    </StyledContainer>
  );
};

export default News;
