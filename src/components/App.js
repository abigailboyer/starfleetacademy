import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import '../style.css'
import Dashboard from './dashboard/Dashboard'
import Signup from './user/Signup'
import Login from './user/Login'
import Academics from './Academics'
import Header from './Header'
import Nav from './Nav'
import Comms from './Comms'
import TrackChange from './petitions/TrackChange'
import MediaQuery from 'react-responsive'

function App() {
  return (
    <main>
      <Header />
      <MediaQuery minDeviceWidth={800}>
        <Nav />
      </MediaQuery>

      <Router>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path ='/dashboard' component={Dashboard} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/academics' component={Academics} />
          <Route exact path='/comms' component={Comms} />
          <Route exact path='/petition' component={TrackChange} />
        </Switch>
      </Router>
    </main>
  );
}

export default App
