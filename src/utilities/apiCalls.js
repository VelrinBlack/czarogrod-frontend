import axios from 'axios';

export const fetchArticle = (id) => {
  return axios.get(`https://czarogrod-backend-strapi.herokuapp.com/posts/${id}`);
};

export const fetchArticles = () => {
  return axios.get('https://czarogrod-backend-strapi.herokuapp.com/posts');
};

export const fetchOffer = () => {
  return axios.get('https://czarogrod-backend-strapi.herokuapp.com/offer');
};

export const fetchPortfolio = () => {
  return axios.get('https://czarogrod-backend-strapi.herokuapp.com/portfolio-cards');
};

export const fetchQuestions = () => {
  return axios.get('https://czarogrod-backend-strapi.herokuapp.com/questions');
};
