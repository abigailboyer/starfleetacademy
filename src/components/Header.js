import React from 'react'
import MediaQuery from 'react-responsive'
import User from './user/User'
import NavMenu from './dashboard/NavMenu'

function Header() {
  return(
    <header>
      <h1>Starfleet Academy</h1>
      <MediaQuery maxDeviceWidth={800}>
        <NavMenu />
      </MediaQuery>
      <MediaQuery minDeviceWidth={800}>
        <User />
      </MediaQuery>
    </header>
  );
}

export default Header
