// react
import React, { useState, useEffect } from 'react';

// external packages
import styled from 'styled-components';
import axios from 'axios';

// components
import Header from '../components/Header';
import Footer from '../components/Footer';
import Post from '../components/Blog/Post';
import SingleSlide from '../components/SingleSlide';

// images
import img from '../images/slider/4.jpg';

const StyledContainer = styled.div`

    .posts-container {
        width: 50%;
        margin: 350px auto;

        @media (max-width: 1920px) { width: 70%; }
        @media (max-width: 1024px) { width: 80%; }
        @media (max-width: 786px) { width: 90%; }
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
        axios.get('http://czarogrod-backend-strapi.herokuapp.com/posts').then(res => setArticles(res.data))

    }, []);

    return (
        <>
            <Header />


            <StyledContainer>
                <div className='posts-container'>
                    {
                        articles.map(article => {

                            const image = article.image.url
                            const title = article.title
                            const content = article.content

                            return <Post image={image} title={title} content={content} id={article.id} key={article.id}/>

                        })
                    }
                </div>

            </StyledContainer>

            <SingleSlide
                text='Potrzebujesz pomocy? Zadzwoń lub napisz'
                location='/portfolio'
                image={img}
            />


            <Footer />
        </>
    );
};

export default Blog;
