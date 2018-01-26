import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Home from '../home';
import './app.css';

// TODO: extract to file
const Glossary = () => (
  <div>Glossary Page</div>
);

const App = () => (
  <Router>
    <div className='app'>
      <ul className='nav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/glossary">Glossary</Link></li>
      </ul>
      <hr/>
      <Route exact path="/" component={ Home }/>
      <Route path="/glossary" component={ Glossary }/>
    </div>
  </Router>
);

export default App;