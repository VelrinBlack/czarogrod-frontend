import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledPost = styled.div`
        position: relative;
        left: 100px;

    .image {
        width: 100%;
    }

    @media (max-width: 1024px) {
        width: 600px;
    }

`;

const Post = (props) => 
{
    function cutString(s, n){
        var cut= s.indexOf(' ', n);
        if(cut === -1) return s;
        return s.substring(0, cut)
    }

    return (
        <StyledPost>
            <img src={props.image} alt='image' className='image' />

            <Link to={'/blog/' + props.id} className="link">
                <h3 className="title">{props.title}</h3>
            </Link>


            <p>{cutString(props.content.match(/[a-zA-Z0-9 !?,.]/g).join(''), 210)}...</p>

            <Link to={'/blog/' + props.id} className="link read-more">
                Czytaj dalej
            </Link>
        </StyledPost>
    );
};

export default Post;
