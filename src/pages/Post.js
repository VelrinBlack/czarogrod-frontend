import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import Header from '../components/Header';
import Footer from '../components/Footer';


const StyledContainer = styled.div`

`;

const Post = (props) => {
    const [article, setArticle] = useState('Ładowanie...');

    useEffect(() => {
        axios.get(`https://radiant-atoll-46287.herokuapp.com/posts/${props.match.params.id}`).then(res => setArticle(res.data))
    }, []);

    const loadImage = () => {
        try {
            return <img src={`https://radiant-atoll-46287.herokuapp.com${article.image.formats.medium.url}`} />
        } catch (error) {
            return 'Tu jest pusto!'
        }
    }

    return (
        <>
            {/* <Header /> */}
            <StyledContainer>
                <Link to="/blog" className="go-back">
                    <span>Powrót</span>
                </Link>

                {loadImage()}
                
                <ReactMarkdown source={article.Content} />
                
            </StyledContainer>
            <Footer />
        </>
    );
};
export default Post;
