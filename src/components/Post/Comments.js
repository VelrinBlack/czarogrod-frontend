// react
import React from 'react';

// external packages
import styled from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';


const StyledComments = styled.div`
    width: 50%;
    margin: 100px auto;

    @media (max-width: 1920px){
        width: 60%;
        font-size: 40px;
    }

    @media (max-width: 1024px){
        width: 70%;
        font-size: 30px;
    }

    @media (max-width: 786px){
        width: 90%;
    }
`;

// const Comments = () => <StyledComments id='disqus_thread' />;
const Comments = props => (
    <StyledComments>
        <DiscussionEmbed
            shortname='czarogrod'
            config={
                {
                    url: 'http://localhost:3000/blog/' + props.article.id,
                    identifier: props.article.id,
                    title: props.article.title,
                    language: 'pl'
                }
            }
        />
    </StyledComments>
)

export default Comments
