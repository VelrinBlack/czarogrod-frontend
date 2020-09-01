import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
import axios from 'axios';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Blog/Post';
import SingleSlide from '../components/SingleSlide';

import img1 from '../images/slider/1.jpg';
import img2 from '../images/slider/3.jpg';

const StyledContainer = styled.div`
    .posts-container {
        width: 50%;
        margin: 50px auto 100px auto;

        @media (max-width: 1920px) {
            width: 70%;
        }
        @media (max-width: 1024px) {
            width: 80%;
        }
        @media (max-width: 786px) {
            width: 90%;
        }
    }
`;

const Blog = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: 'smooth',
        });

        axios
            .get('https://czarogrod-backend-strapi.herokuapp.com/posts')
            .then((res) => setArticles(res.data));
    }, []);

    return (
        <>
            <Header />

            <StyledContainer>
                <div className="posts-container">
                    {articles.map((article) => {
                        const image = article.image.url;
                        const title = article.title;
                        const content = article.content;

                        return (
                            <Post
                                image={image}
                                title={title}
                                content={content}
                                id={article.id}
                                key={article.id}
                            />
                        );
                    })}
                </div>
            </StyledContainer>

            <SingleSlide
                text="Chcesz zlecić wykonanie projektu? Sprawdź szczegóły oferty"
                location="/oferta"
                image={img1}
            />

            <SingleSlide
                text="Potrzebujesz pomocy? Zadzwoń lub napisz"
                location="/portfolio"
                image={img2}
            />

            <Footer />
        </>
    );
};

export default Blog;
