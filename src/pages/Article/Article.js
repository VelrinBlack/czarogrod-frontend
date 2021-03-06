import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import Comments from '../../components/Article/Comments/Comments';
import ArticleCards from '../../components/Article/ArticleCards/ArticleCards';
import { StyledContainer } from './ArticleStyles';

const Article = ({ article }) => {
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
    <>
      <StyledContainer>
        {loadImage()}
        <h1 className='title'>{loadTitle()}</h1>
        <div className='txt'>{loadConent()}</div>

        <ArticleCards currentPost={article} />
        <Comments article={article} />
      </StyledContainer>
    </>
  );
};

Article.propTypes = {
  match: PropTypes.object,
};

export default Article;
