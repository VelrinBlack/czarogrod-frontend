import React from 'react';

import { StyledContainer } from './NewsStyles';
import Post from '../../Blog/Article/Article';
import router from 'next/router';

const News = ({ data }) => {
  if (data) data = [data[data.length - 1], data[data.length - 2]];

  return (
    <StyledContainer>
      <>
        <h1 className='heading'>Najnowsze wpisy</h1>
        <div className='posts'>
          {!data
            ? 'Ładowanie...'
            : data.map((post) => {
                if (post) {
                  return (
                    <Post
                      image={post.image.url}
                      title={post.title}
                      content={post.content}
                      key={post.id}
                      id={post.id}
                    />
                  );
                }
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
