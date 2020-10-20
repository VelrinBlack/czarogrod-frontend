import React, { useState, useEffect } from 'react';
import axios from 'axios';
import router from 'next/router';

import { StyledContainer } from './ArticleCardsStyles';

const Article = ({ currentPost }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get('https://czarogrod-backend-strapi.herokuapp.com/posts')
      .then((res) => {
        res.data = res.data.filter((article) => article.id !== currentPost.id);
        res.data = res.data.reverse();

        if (res.data.length > 5) res.data.splice(0, 5);

        setArticles(res.data);
      });
  }, [currentPost]);

  return (
    <>
      <StyledContainer>
        <div className='cards-wrapper'>
          {articles.map((article) => (
            <a
              className='card'
              href={`/blog/${article.id}`}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/blog/${article.id}`);
                window.scroll({
                  top: 0,
                  behavior: 'smooth',
                });
              }}
            >
              <h2>{article.title}</h2>
              <img src={article.image.url} alt='zdjęcie główne' />
            </a>
          ))}
        </div>
      </StyledContainer>
    </>
  );
};

export default Article;
