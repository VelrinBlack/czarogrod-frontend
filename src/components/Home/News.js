// react
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// external packages
import styled from 'styled-components';
import axios from 'axios';

// components
import Post from '../Blog/Post'


const StyledContainer = styled.div`
    position: relative;

    width: 60%;
    margin: 150px auto;

    @media (max-width: 1920px){ width: 70%; }
    @media (max-width: 1024px){ width: 80%; }
    @media (max-width: 786px){ width: 90%; }

    .heading {
        margin-bottom: 150px;
        font-size: 60px;
        text-align: center;

        @media (max-width: 1024px){ margin-bottom: 100px; font-size: 50px;}
        @media (max-width: 786px) { font-size: 40px; }
    }


    .see-more {
        position: relative;
        left: 50%;

        width: 200px;
        height: 50px;

        display: block;

        padding: 10px 20px;
        margin-top: 50px;

        text-align: center;
        font-size: 16px;
        font-weight: 700;
        color: #399ca1;
        text-decoration: none;
        letter-spacing: 1.5px;

        background-color: #fff;
        border: 3px solid #399ca1;
        border-radius: 4px;

        transform: translateX(-50%);
        cursor: pointer;
        overflow: hidden;
        z-index: 0;

        &:hover {
            box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
        }

        &:focus {
            outline: none;
        }
    }
`;

const NajnowszeWpisy = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://czarogrod-backend-strapi.herokuapp.com/posts?_limit=2').then(res => setArticles(res.data))
    }, []);

    return (
        <StyledContainer>
            <h1 className='heading'>Najnowsze wpisy</h1>
            <div className='posts'>
                {
                    // check if there are no posts
                    articles.length === 0 ? (
                        <h5>Tu jest pusto!</h5>
                    ) : null
                }

                {
                    articles.map(post => {
                        return <Post image={post.image.url} title={post.title} content={post.content} key={post.id} id={post.id}/>
                    })
                }
            </div>
            
            <Link to='/blog' className='see-more'>
                Zobacz więcej
            </Link>
        </StyledContainer>
    );
};

export default NajnowszeWpisy;
