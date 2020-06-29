import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownSettings from './DropdownSettings'

function NavMenu() {
  return (
    <nav>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Menu
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/dashboard">Dashboard</Dropdown.Item>
          <Dropdown.Item href="/comms">Comms</Dropdown.Item>
          <Dropdown.Item href="/academics">Academics</Dropdown.Item>
          <Dropdown.Item href="/registration">Registration</Dropdown.Item>
          <Dropdown.Item href="/library">Library</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/settings">Settings</Dropdown.Item>
          <Dropdown.Item href="/">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  )
}

export default NavMenu
