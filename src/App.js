import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Analytics from 'react-router-ga';

import './App.css';

import Home from './pages/Home/Home';
import Offer from './pages/Offer/Offer';
import Portfolio from './pages/Portfolio/Portfolio';
import Questions from './pages/Questions/Questions';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import { fetchNews, fetchArticles } from './utilities/apiCalls';

import dataContext from './Context';

const App = () => {
  const [contextValue, setContextValue] = useState(null);

  useEffect(() => {
    const wrapper = async () => {
      let data = {};

      const fetchData = () => {
        return Promise.all([
          fetchNews().then((res) => (data.news = res.data)),
          fetchArticles().then((res) => (data.articles = res.data)),
        ]);
      };
      await fetchData();

      setContextValue(data);
    };

    wrapper();
  }, []);

  return (
    <Router>
      <Analytics id='UA-172534345-1'>
        <dataContext.Provider value={contextValue}>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/omnie' exact component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/oferta' component={Offer} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/pytania' component={Questions} />
            <Route path='/blog/:id' component={Article} />
            <Route path='/blog' component={Blog} />
            <Route path='/kontakt' component={Contact} />
            <Route path='/polityka_prywatności' component={PrivacyPolicy} />
          </Switch>
          <Footer />
        </dataContext.Provider>
      </Analytics>
    </Router>
  );
};

export default App;
