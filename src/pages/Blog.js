import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Blog/Post';
// import Comments from '../components/Blog/Comments';

import img from '../images/4.jpg';


const StyledContainer = styled.div`
    width: 60%;
    margin: 350px auto;
`;

const ContactSlide = styled.div`
    width: 100%;
    margin-bottom: 300px;

    .slide {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        background-image: url(${img});
        background-size: cover;
        background-position: center;

        margin-top: 100px;
        color: #fff;
        overflow: hidden;
    }

    h1 {
        width: 100vw;

        display: block;

        padding: 20px;
        background: rgba(0, 0, 0, 0.2);

        text-align: center;
        font-size: 50px;
        font-weight: 700;
        letter-spacing: 2px;
    }
`;

const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://radiant-atoll-46287.herokuapp.com/posts').then(res => setArticles(res.data))
    }, []);

    return (
        <>
            <Header />

            <StyledContainer>
                {
                    articles.map(article => {
                        const image = `https://radiant-atoll-46287.herokuapp.com${article.image.formats.large.url}`
                        const title = article.title
                        const content = article.Content

                        return <Post image={image} title={title} content={content} id={article.id} key={article.id}/>
                    })
                }
            </StyledContainer>

            {/* <Comments /> */}


            <Link to="/portfolio" style={{ textDecoration: 'none' }}>
                <ContactSlide>
                    <div className="slide2 slide">
                        <h1>Potrzebujesz pomocy? Zadzwoń lub napisz</h1>
                    </div>
                </ContactSlide>
            </Link>

            <Footer />
        </>
    );
};

export default Blog;
