// react
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// external packages
import styled from 'styled-components';


const StyledPost = styled.div`
    .link-wrapper {
        color: #000;
        text-decoration: none;

        .image {
            width: 100%;
            height: 500px;
            object-fit: cover;

            @media (max-width: 1024px) { height: 300px; }
        }
        
        .title {
            font-size: 25px;

            @media (max-width: 1920px) { font-size: 20px; }
        }

        .text {
            font-size: 20px;

            @media (max-width: 1920px) { font-size: 17px; }
        }
    }
    
`;

const Post = (props) => {

    // load text preview (first 210 characters)
    const loadText = () => {

        const cutString = (string, number) => {
            const cut = string.indexOf(' ', number);
            if (cut === -1) return string;
            return string.substring(0, cut)
        }

        try {
            return cutString(
                // only letters, numbers and !?,.
                props.content.replace(/\r?\n|\r/g, ' ').match(/[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ0-9 !?,.]/g).join(''),
                210
            )
        } catch (error) {
            return 'Ładowanie...'
        }
    }

    return (
        <StyledPost>
            <Link to={'/blog/' + props.id} className='link-wrapper'>
                <img src={props.image} alt='Zdjęcie artykułu' className='image' />
                <h3 className='title'>{props.title}</h3>
                <p className='text'>{loadText()}</p>
            </Link>
        </StyledPost>
    );
};

Post.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string
};

export default Post;
