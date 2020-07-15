import React from 'react'
import User from '../user/User'

class DropdownSettings extends React.Component {
  constructor() {
    super();
    this.state = {
      isHidden: true
    }
    this.toggleHidden = this.toggleHidden.bind(this)
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render() {
    if(this.state.isHidden) {
      return (
        <nav id="menuNav">
          <button id="menuTitle" onClick={this.toggleHidden}>Menu</button>
        </nav>
      )
    } else {
      return (
        <nav id="menuNav">
          <button id="menuTitle" onClick={this.toggleHidden}>Menu</button>
          <ul id="menu">
            <li>Settings</li>
            <li><User /></li>
          </ul>
        </nav>
      )
    }
  }
}

export default DropdownSettings
