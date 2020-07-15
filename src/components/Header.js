import React from 'react'
import MediaQuery from 'react-responsive'
import User from './user/User'
import NavMenu from './dashboard/NavMenu'
import DropdownSettings from './dashboard/DropdownSettings'

function Header() {
  return(
    <header>
      <h1>Starfleet Academy</h1>
      <MediaQuery maxDeviceWidth={800}>
        <NavMenu />
      </MediaQuery>
      <MediaQuery minDeviceWidth={800}>
        <DropdownSettings />
      </MediaQuery>
    </header>
  );
}

export default Header
