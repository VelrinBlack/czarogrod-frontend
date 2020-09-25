import React, { useContext, useState, useEffect } from 'react';
import Link from 'next/link';

import { StyledContainer } from './NewsStyles';
import Post from '../../Blog/Article/Article';
import dataContext from '../../../Context';

const News = () => {
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

        <Link href='/blog'>
          <div className='see-more'>Zobacz więcej</div>
        </Link>
      </>
    </StyledContainer>
  );
};

export default News;
