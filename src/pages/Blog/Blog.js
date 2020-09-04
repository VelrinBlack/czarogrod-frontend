import React, { useState, useEffect } from 'react';

import { StyledContainer } from './BlogStyles';
import Post from '../../components/Blog/Article/Article';
import SingleSlide from '../../components/SingleSlide/SingleSlide';
import { fetchArticles } from '../../utilities/apiCalls';

import img1 from '../../images/slider/1.jpg';
import img2 from '../../images/slider/3.jpg';

const Blog = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    fetchArticles().then((res) => setArticles(res.data));
  }, []);

  return (
    <>
      <StyledContainer>
        <div className='posts-container'>
          {articles.map((article) => {
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
        image={img1}
      />

      <SingleSlide
        text='Potrzebujesz pomocy? Zadzwoń lub napisz'
        location='/portfolio'
        image={img2}
      />
    </>
  );
};

export default Blog;
