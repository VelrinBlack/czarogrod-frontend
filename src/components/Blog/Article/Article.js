import React, { useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { StyledContainer } from './ArticleStyles';
import { loadArticlePreviewText } from '../../../utilities/string';

const Article = (props) => {
  const [clicked, setClicked] = useState(false);
  return (
    <StyledContainer clicked={clicked}>
      <Link href={'/blog/' + props.id}>
        <div className='link-wrapper' onClick={() => setClicked(true)}>
          <img src={props.image} alt='Zdjęcie artykułu' className='image' />
          <div className='text-content-wrapper'>
            <h3 className='title'>{props.title}</h3>
            <p className='text'>{loadArticlePreviewText(props.content)}</p>
          </div>
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
