import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';

import Comments from '../../components/Article/Comments/Comments';
import { fetchArticle } from '../../utilities/apiCalls';
import { StyledContainer } from './ArticleStyles';

const Article = (props) => {
  const [article, setArticle] = useState('Ładowanie...');

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });

    fetchArticle(props.match.params.id).then((res) => setArticle(res.data));
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
    <>
      {article ? (
        <Helmet>
          <meta property='og:image' content={article.image.url} />
          <meta property='og:image:secure_url' content={article.image.url} />
        </Helmet>
      ) : null}
      <StyledContainer>
        {loadImage()}
        <h1 className='title'>{loadTitle()}</h1>
        <p className='txt'>{loadConent()}</p>

        {article ? <Comments article={article} /> : null}
      </StyledContainer>
    </>
  );
};

Article.propTypes = {
  match: PropTypes.object,
};

export default Article;
