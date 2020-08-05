import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import styled from 'styled-components';
import axios from 'axios';

import Post from '../Blog/Post';

const StyledContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 300px 0;

    .heading {
        margin-bottom: 200px;
        font-size: 60px;
    }

    .posts {
        width: 40%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .button-container {
        width: 100%;
        margin-top: 100px;

        display: flex;
        justify-content: center;

        .see-more-btn {
            width: 200px;
            height: 50px;

            display: flex;
            justify-content: center;
            align-items: center;

            text-decoration: none;
            font-size: 16px;
            font-weight: 700;
            color: #399ca1;
            letter-spacing: 1.5px;
            color: #399ca1;

            background: #fff;
            border: #399ca1 solid 3px;
            border-radius: 4px;
            box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.2);

            cursor: pointer;
            overflow: hidden;
            z-index: 0;

            &:hover {
                    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
                }

                &:focus {
                    outline: none;
                    animation: rm-btn-shadow .4s;
                }
            }

            @keyframes rm-btn-shadow {
                0% {
                    box-shadow: 0 3px 3px 0px rgba(0, 0, 0, 0.2);
                } 50% {
                    box-shadow: 0 0 0 0 rgba(0,0,0, .2);
                } 100% {
            box-shadow: 0 5px 5px 0px rgba(0, 0, 0, 0.2);
                }
            }
        }
    }
`;

const NajnowszeWpisy = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios.get('https://radiant-atoll-46287.herokuapp.com/posts').then(res => setArticles(res.data))
    }, []);

    return (
        <StyledContainer>
            <h1 className="heading">Najnowsze wpisy</h1>
            <div className="posts">
                {
                    articles.length === 0 ? (
                        <h5>Nie ma jeszcze żadnyh postów</h5>
                    ) : null
                }

                {articles.map((post) => {
                    
                })}
            </div>
            <div className="button-container">
                <Link to="/blog" className="see-more-btn">
                    Zobacz więcej
                </Link>
            </div>
        </StyledContainer>
    );
};

export default NajnowszeWpisy;
