import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Analytics from 'react-router-ga';

import './App.css';

// pages
import Home from './pages/Home';
import Offer from './pages/Offer';
import Portfolio from './pages/Portfolio';
import Pytania from './pages/Questions';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <Analytics id='UA-172534345-1'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/omnie' exact component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/oferta' component={Offer} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/pytania' component={Pytania} />
          <Route path='/blog/:id' component={Post} />
          <Route path='/blog' component={Blog} />
          <Route path='/kontakt' component={Contact} />
          <Route path='/polityka_prywatności' component={PrivacyPolicy} />
        </Switch>
      </Analytics>
    </Router>
  );
};

export default App;
