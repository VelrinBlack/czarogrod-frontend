import React, { useState } from 'react';
import router from 'next/router';
import PropTypes from 'prop-types';

import { StyledContainer } from './ArticleStyles';
import { loadArticlePreviewText } from '../../../utilities/string';

const Article = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <StyledContainer clicked={clicked}>
      <a
        className='link-wrapper'
        href={'/blog/' + props.id}
        onClick={(e) => {
          e.preventDefault();
          router.push('/blog/' + props.id);
          window.scroll({
            top: 0,
            behavior: 'smooth',
          });
          setClicked(true);
        }}
      >
        <img src={props.image} alt='Zdjęcie artykułu' className='image' />
        <div className='text-content-wrapper'>
          <h3 className='title'>{props.title}</h3>
          <p className='text'>{loadArticlePreviewText(props.content)}</p>
        </div>
      </a>
    </StyledContainer>
  );
};

Article.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};

export default Article;
