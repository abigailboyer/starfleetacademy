import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import User from '../user/User'

function DropdownSettings() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="/settings">Settings</Dropdown.Item>
        <Dropdown.Item><User /></Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownSettings
