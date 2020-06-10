import React from 'react'
import {Link} from 'react-router-dom'
import User from './user/User'

function Header() {
  return(
    <header>
      <h1>Starfleet Academy</h1>
      <User />
    </header>
  );
}

export default Header
