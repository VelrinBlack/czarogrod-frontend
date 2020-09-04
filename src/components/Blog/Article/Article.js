import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { StyledContainer } from './ArticleStyles';

const Post = (props) => {
  const loadText = () => {
    const cutString = (string, number) => {
      const cut = string.indexOf(' ', number);
      if (cut === -1) return string;
      return string.substring(0, cut);
    };

    try {
      return cutString(
        props.content
          .replace(/\r?\n|\r/g, ' ')
          .match(/[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 !?,.]/g)
          .join(''),
        210,
      );
    } catch (error) {
      return 'Ładowanie...';
    }
  };

  return (
    <StyledContainer>
      <Link to={'/blog/' + props.id} className='link-wrapper'>
        <img src={props.image} alt='Zdjęcie artykułu' className='image' />
        <div className='text-content-wrapper'>
          <h3 className='title'>{props.title}</h3>
          <p className='text'>{loadText()}</p>
        </div>
      </Link>
    </StyledContainer>
  );
};

Post.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};

export default Post;
