import React from 'react';

import { StyledContainer } from './NewsStyles';
import Post from '../../Blog/Article/Article';

const News = ({ data }) => {
  data = [data[data.length - 1], data[data.length - 2]];

  return (
    <StyledContainer>
      <>
        <h1 className='heading'>Najnowsze wpisy</h1>
        <div className='posts'>
          {data.map((post) => {
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
