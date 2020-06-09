import React from 'react'
import {Link} from 'react-router-dom'
import User from './User'

function Header() {
  return(
    <header>
      <h1>Starfleet Academy</h1>
      <User />
    </header>
  );
}

export default Header
