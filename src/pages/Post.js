import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

import axios from 'axios';
import ReactMarkdown from 'react-markdown'

import Header from '../components/Header';
import Footer from '../components/Footer';
import Comments from '../components/Blog/Comments';

import ReactDOMServer from 'react-dom/server'

import ReactHtmlParser from 'react-html-parser';


const StyledContainer = styled.div`

`;

const Post = (props) => {
    const [article, setArticle] = useState('Ładowanie...');

    useEffect(() => {
        axios.get(`https://radiant-atoll-46287.herokuapp.com/posts/${props.match.params.id}`).then(res => setArticle(res.data))
    }, []);

    const loadConent = () => {
        try {

            var rx = /!\[.*?\]\((.*?)\)/g;
            var urls = [], m;
            while(m = rx.exec(article.Content)) {
                urls.push(m[1]);
            }

            urls.forEach((url, index) => {
                article.Content = article.Content.replace(/!\[.*?\]\((.*?)\)/, `<img src=https://radiant-atoll-46287.herokuapp.com${url} />`)
            });

            return <ReactMarkdown source={ReactDOMServer.renderToStaticMarkup(ReactHtmlParser(article.Content))} escapeHtml={false}/>
        } catch (error) {
            return 'Ładowanie zawartości...'
        }
    }

    return (
        <>
            <Header />
            <StyledContainer>
                <Link to="/blog" className="go-back">
                    <span>Powrót</span>
                </Link>

                {loadConent()}
                
                <Comments/>
            </StyledContainer>
            <Footer />
        </>
    );
};
export default Post;
