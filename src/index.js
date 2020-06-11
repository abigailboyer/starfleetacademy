import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './style.css';
import App from './components/App';
import {UserContextProvider} from './providers/UserProvider'

ReactDOM.render(
  <UserContextProvider>
    <Router>
      <App />
    </Router>
  </UserContextProvider>,
  document.getElementById('root')
);
