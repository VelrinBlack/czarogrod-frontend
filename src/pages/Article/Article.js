import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';

import Comments from '../../components/Article/Comments/Comments';

const StyledContainer = styled.div`
  position: relative;
  margin-top: 150px;

  @media (max-width: 1024px) {
    margin-top: 330px;
  }

  img {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }

  .title {
    width: 50%;
    margin: 50px auto;

    font-size: 50px;

    @media (max-width: 1920px) {
      width: 60%;
      font-size: 40px;
    }

    @media (max-width: 1024px) {
      width: 70%;
      font-size: 30px;
    }

    @media (max-width: 786px) {
      width: 90%;
    }
  }

  .txt {
    width: 50%;
    margin: 0 auto;

    @media (max-width: 1920px) {
      width: 60%;
    }

    @media (max-width: 1024px) {
      width: 70%;
    }

    @media (max-width: 786px) {
      width: 90%;
    }

    p {
      font-size: 20px;

      @media (max-width: 1920px) {
        font-size: 16px;
      }
    }

    img {
      width: 100%;
      margin: 40px 0;
    }
  }
`;

const Article = (props) => {
  const [article, setArticle] = useState('Ładowanie...');

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    axios
      .get(
        `https://czarogrod-backend-strapi.herokuapp.com/posts/${props.match.params.id}`,
      )
      .then((res) => setArticle(res.data));
  }, [props.match.params.id]);

  const loadImage = () => {
    try {
      return (
        <img className='main-image' src={article.image.url} alt='Article' />
      );
    } catch (error) {
      return 'Ładowanie...';
    }
  };

  const loadTitle = () => {
    try {
      return article.title;
    } catch (error) {
      return '';
    }
  };

  const loadConent = () => {
    try {
      const rx = /!\[.*?\]\((.*?)\)/g;
      let urls = [],
        m;
      while (m === rx.exec(article.content)) {
        urls.push(m[1]);
      }

      urls.forEach((url) => {
        article.content = article.content.replace(
          /!\[.*?\]\((.*?)\)/,
          `<img class='img2' src=${url} />`,
        );
      });

      return <ReactMarkdown source={article.content} escapeHtml={false} />;
    } catch (error) {
      return '';
    }
  };

  return (
    <StyledContainer>
      {loadImage()}
      <h1 className='title'>{loadTitle()}</h1>
      <p className='txt'>{loadConent()}</p>

      {article ? <Comments article={article} /> : null}
    </StyledContainer>
  );
};

Article.propTypes = {
  match: PropTypes.object,
};

export default Article;
