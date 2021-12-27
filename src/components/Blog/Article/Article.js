import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';

import { StyledContainer } from './ArticleStyles';
import { loadArticlePreviewText } from '../../../utilities/string';

const Article = (props) => {
  return (
    <StyledContainer>
      <a className='link-wrapper' href={'/blog/' + props.id}>
        <div className='image-wrapper'>
          <Image src={props.image} alt='Zdjęcie artykułu' layout='fill' />
        </div>
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
