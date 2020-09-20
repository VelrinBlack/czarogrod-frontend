import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import { Helmet } from 'react-helmet';
import { useRouter } from 'next/router';
import axios from 'axios';

import Comments from '../../components/Article/Comments/Comments';
import { StyledContainer } from './ArticleStyles';

const Article = (props) => {
  const [article, setArticle] = useState();
  const router = useRouter();
  useEffect(() => {
    if (router.asPath.replace('/blog/', '') !== '[id]') {
      axios
        .get(
          `https://czarogrod-backend-strapi.herokuapp.com/posts/${router.asPath.replace(
            '/blog/',
            '',
          )}`,
        )
        .then((res) => setArticle(res.data));
    }
  }, [router.asPath]);

  const loadImage = () => {
    try {
      return <img className='main-image' src={article.image.url} alt='Article' />;
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
        <div className='txt'>{loadConent()}</div>

        {article ? <Comments article={article} /> : null}
      </StyledContainer>
    </>
  );
};

Article.propTypes = {
  match: PropTypes.object,
};

export default Article;