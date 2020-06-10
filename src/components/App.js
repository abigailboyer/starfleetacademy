import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../style.css'
import Dashboard from './Dashboard'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App
