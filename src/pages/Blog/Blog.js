import React, { useEffect, useState, useContext } from 'react';

import { StyledContainer } from './BlogStyles';
import Post from '../../components/Blog/Article/Article';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import dataContext from '../../Context';

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const data = useContext(dataContext);

  useEffect(() => {
    if (data.articles) {
      setArticles(data.articles);
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    }
  });

  return (
    <>
      <StyledContainer>
        <div className='posts-container'>
          {articles.length
            ? articles.reverse().map((article) => {
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
              })
            : 'Ładowanie...'}
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
