import React from 'react'

function NavMenu() {
  return (
    <nav>
      <h5 id="menuTitle">Menu</h5>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/comms">Comms</a></li>
        <li><a href="/academics">Academics</a></li>
        <li><a href="/registration">Registration</a></li>
        <li><a href="/library">Library</a></li>
        <li><a href="/settings">Settings</a></li>
        <li><a href="/">Logout</a></li>
      </ul>
    </nav>
  )
}

export default NavMenu
