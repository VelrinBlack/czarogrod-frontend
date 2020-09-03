import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Analytics from 'react-router-ga';

import './App.css';

import Home from './pages/Home/Home';
import Offer from './pages/Offer/Offer';
import Portfolio from './pages/Portfolio/Portfolio';
import Pytania from './pages/Questions/Questions';
import Blog from './pages/Blog/Blog';
import Article from './pages/Article/Article';
import Contact from './pages/Contact/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';

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
          <Route path='/blog/:id' component={Article} />
          <Route path='/blog' component={Blog} />
          <Route path='/kontakt' component={Contact} />
          <Route path='/polityka_prywatności' component={PrivacyPolicy} />
        </Switch>
      </Analytics>
    </Router>
  );
};

export default App;
