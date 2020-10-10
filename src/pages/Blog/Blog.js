import React from 'react';

import { StyledContainer } from './BlogStyles';
import Post from '../../components/Blog/Article/Article';
import SingleSlide from '../../components/SingleSlide/SingleSlide';

const Blog = ({ data }) => {
  return (
    <>
      <StyledContainer>
        <div className='posts-container'>
          {data.reverse().map((article) => {
            const image = article.image.url;
            const title = article.title;
            const content = article.content;

            return (
              <Post
                image={image}
                title={title}
                content={content}
                id={article.id}
                key={article.id}
              />
            );
          })}
        </div>
      </StyledContainer>

      <SingleSlide
        text='Chcesz zlecić wykonanie projektu? Sprawdź szczegóły oferty'
        location='/oferta'
        image='/images/slider/1.jpg'
      />

      <SingleSlide
        text='Potrzebujesz pomocy? Zadzwoń lub napisz'
        location='/portfolio'
        image='/images/slider/3.jpg'
      />
    </>
  );
};

export default Blog;
