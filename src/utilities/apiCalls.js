import axios from 'axios';

export const fetchNews = () => {
  return axios.get(
    'https://czarogrod-backend-strapi.herokuapp.com/posts?_limit=2',
  );
};

export const fetchArticle = (props) => {
  return axios.get(
    `https://czarogrod-backend-strapi.herokuapp.com/posts/${props}`,
  );
};

export const fetchArticles = () => {
  return axios.get('https://czarogrod-backend-strapi.herokuapp.com/posts');
};
