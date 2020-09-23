import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import { StyledContainer } from './NewsStyles';
import Post from '../../Blog/Article/Article';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get('https://czarogrod-backend-strapi.herokuapp.com/posts')
      .then((data) => setArticles(data.data.reverse().slice(0, 2)));
  }, []);
  return (
    <StyledContainer>
      <>
        <h1 className='heading'>Najnowsze wpisy</h1>
        <div className='posts'>
          {articles.length === 0
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
