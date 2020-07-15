import React from 'react'
import User from '../user/User'

function DropdownSettings() {
  /* when clicking menu, display the ul */

  return (
    <nav id="settings">
      <h5 id="menuTitle">Menu</h5>
      <ul>
        <li>Settings</li>
        <li><User /></li>
      </ul>
    </nav>
  )
}

export default DropdownSettings
