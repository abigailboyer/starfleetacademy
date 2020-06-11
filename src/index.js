import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './style.css';
import App from './components/App';
import UserContext from './providers/UserProvider'

ReactDOM.render(
  <UserContext.Provider value={"James T. Kirk"}>
    <Router>
      <App />
    </Router>
  </UserContext.Provider>,
  document.getElementById('root')
);
