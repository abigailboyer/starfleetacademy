import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import '../style.css'
import Dashboard from './dashboard/Dashboard'
import Signup from './user/Signup'
import Login from './user/Login'

function App() {
  return (
    /* fine to not include an enclosing tag? */
    <Router>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App
