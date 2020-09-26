import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

import { StyledContainer } from './ArticleCardsStyles';

const Article = ({ current_id }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get('https://czarogrod-backend-strapi.herokuapp.com/posts').then((data) => {
      data.data = data.data.reverse();

      for (const article of data.data) {
        if (article.id === current_id) {
          const articleIndex = data.data.indexOf(article);
          data.data.splice(articleIndex, 1);
        }
      }

      if (data.data.length > 5) data.data.splice(0, 5);

      setArticles(data.data);
    });
  }, []);

  return (
    <>
      <StyledContainer>
        <div className='cards-wrapper'>
          {articles.map((article) => (
            <Link href={`https://czarogrod.pl/blog/${article.id}`}>
              <div className='card'>
                <h2>{article.title}</h2>
                <img src={article.image.url} alt='zdjęcie główne' />
              </div>
            </Link>
          ))}
        </div>
      </StyledContainer>
    </>
  );
};

export default Article;
