import React from 'react';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';

import { StyledContainer } from './CommentsStyles';

const Comments = (props) => (
  <StyledContainer>
    <DiscussionEmbed
      shortname='czarogrod'
      config={{
        url: 'https://czarogrod.pl/blog/' + props.article.id,
        identifier: props.article.id,
        title: props.article.title,
        language: 'pl',
      }}
    />
  </StyledContainer>
);

Comments.propTypes = {
  article: PropTypes.object,
};

export default Comments;
