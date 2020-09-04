import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

import { StyledContainer } from './NewsStyles';

import Post from '../../Blog/Article/Article';

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get('https://czarogrod-backend-strapi.herokuapp.com/posts?_limit=2')
      .then((res) => setArticles(res.data));
  }, []);

  return (
    <StyledContainer>
      <h1 className='heading'>Najnowsze wpisy</h1>
      <div className='posts'>
        {articles.length === 0 ? <h5>Tu jest pusto!</h5> : null}

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
