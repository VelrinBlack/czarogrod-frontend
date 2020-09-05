import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledContainer } from './ArticleStyles';
import { loadArticlePreviewText } from '../../../utilities/string';

const Article = (props) => {
  return (
    <StyledContainer>
      <Link to={'/blog/' + props.id} className='link-wrapper'>
        <img src={props.image} alt='Zdjęcie artykułu' className='image' />
        <div className='text-content-wrapper'>
          <h3 className='title'>{props.title}</h3>
          <p className='text'>{loadArticlePreviewText(props.content)}</p>
        </div>
      </Link>
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
