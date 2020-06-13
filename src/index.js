import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import './style.css';
import App from './components/App';
import {UserContextProvider} from './providers/UserProvider'
import Firebase, {FirebaseContext} from './firebase'

ReactDOM.render(
  <FirebaseContext.Provider value={Firebase}>
    <UserContextProvider>
      <Router>
        <App />
      </Router>
    </UserContextProvider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);
