import React from 'react'
import {Link} from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import Comms from './Comms'
import Academics from './Academics'
import Registration from './Registration'
import Library from './Library'

function Nav() {
  return(
    <nav>
      <ul>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <li>
          <Link to='/comms'>Comms</Link>
        </li>
        <li>
          <Link to='/academics'>Academics</Link>
        </li>
        <li>
          <Link to={Registration}>Registration</Link>
        </li>
        <li>
          <Link to={Library}>Library</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
