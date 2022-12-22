import axios from 'axios';

export const fetchArticle = (id) => {
  return axios.get(
    `https://czarogrod-backend-strapi-2.herokuapp.com/posts/${id}`
  );
};

export const fetchArticles = () => {
  return axios.get('https://czarogrod-backend-strapi-2.herokuapp.com/posts');
};

export const fetchOffer = () => {
  return axios.get('https://czarogrod-backend-strapi-2.herokuapp.com/offer');
};

export const fetchPortfolio = () => {
  return axios.get(
    'https://czarogrod-backend-strapi-2.herokuapp.com/portfolio-cards'
  );
};

export const fetchQuestions = () => {
  return axios.get(
    'https://czarogrod-backend-strapi-2.herokuapp.com/questions'
  );
};
