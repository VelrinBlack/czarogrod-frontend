import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { StyledContainer } from './NewsStyles';
import Post from '../../Blog/Article/Article';
import dataContext from '../../../Context';

const News = () => {
  const data = useContext(dataContext);

  let articles = [];

  if (data) {
    articles = data.news;
  }

  return (
    <StyledContainer>
      <h1 className='heading'>Najnowsze wpisy</h1>
      <div className='posts'>
        {articles.length === 0 ? 'Ładowanie...' : null}

        {articles.map((post) => {
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

      <Link to='/blog' className='see-more'>
        Zobacz więcej
      </Link>
    </StyledContainer>
  );
};

export default News;
