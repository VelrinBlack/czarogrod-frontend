import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledPost = styled.div`
  .link-wrapper {
    display: flex;

    color: #000;
    text-decoration: none;

    @media (max-width: 1024px) {
      flex-direction: column;
    }

    .image {
      width: 300px;
      height: 250px;
      object-fit: cover;

      @media (max-width: 1024px) {
        width: 100%;
        height: 250px;
      }
    }

    .text-content-wrapper {
      display: flex;
      flex-direction: column;

      padding-left: 40px;

      @media (max-width: 1024px) {
        padding: 0;
      }

      .title {
        font-size: 25px;

        @media (max-width: 1920px) {
          font-size: 20px;
        }
        @media (max-width: 1280px) {
          font-size: 18px;
        }
      }

      .text {
        font-size: 20px;

        @media (max-width: 1920px) {
          font-size: 17px;
        }
        @media (max-width: 1280px) {
          font-size: 15px;
        }
      }
    }
  }
`;

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
    <StyledPost>
      <Link to={'/blog/' + props.id} className='link-wrapper'>
        <img src={props.image} alt='Zdjęcie artykułu' className='image' />
        <div className='text-content-wrapper'>
          <h3 className='title'>{props.title}</h3>
          <p className='text'>{loadText()}</p>
        </div>
      </Link>
    </StyledPost>
  );
};

Post.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};

export default Post;
