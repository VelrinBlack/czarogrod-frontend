// react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// external packages
import styled from 'styled-components';
import axios from 'axios';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Blog/Post';

// images
import portfolio_slide_background from '../images/slider/4.jpg';


const StyledContainer = styled.div`

    .posts-container {
        width: 60%;
        margin: 350px auto;

        @media (max-width: 1920px) { width: 70%; }
        @media (max-width: 1024px) { width: 80%; }
        @media (max-width: 786px) { width: 90%; }
    }

    .portfolio-link-slide {
        position: relative;

        width: 100%;
        height: 200px;

        display: block;
        margin-top: 100px;

        background: url(${portfolio_slide_background}) rgba(0, 0, 0, 0.2) center;
        background-size: cover;
        background-blend-mode: color-dodge;

        text-decoration: none;

        @media (max-width: 1024px) { height: 150px; }

        h1 {
            position: absolute;
            top: 50%;
            left: 50%;

            width: 100%;
            margin: 0;
            padding: 0 30px;

            display: block;

            text-align: center;

            font-size: 50px;
            font-weight: 700;
            color: white;
            letter-spacing: 2px;

            transform: translate(-50%, -50%);

            @media (max-width: 1024px) { font-size: 30px; }
        }
    }

`;

const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        // scroll to the top
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });

        // set articles to posts from strapi
        axios.get('https://czarogrod-server.herokuapp.com/posts').then(res => setArticles(res.data))

    }, []);

    return (
        <>
            <Header />


            <StyledContainer>
                <div className='posts-container'>
                    {
                        articles.map(article => {

                            const image = article.image.formats.large.url
                            const title = article.title
                            const content = article.content

                            return <Post image={image} title={title} content={content} id={article.id} key={article.id}/>

                        })
                    }
                </div>

            <Link to='/portfolio' className='portfolio-link-slide' >
                <h1>Potrzebujesz pomocy? Zadzwoń lub napisz</h1>
            </Link>

            </StyledContainer>


            <Footer />
        </>
    );
};

export default Blog;
