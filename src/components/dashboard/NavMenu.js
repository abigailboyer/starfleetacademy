import React from 'react'

class NavMenu extends React.Component {
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
    console.log(this.state.isHidden);
  }

  render () {
    if(this.state.isHidden) {
      return(
        <nav id="menuNav">
          <button id="menuTitle" onClick={this.toggleHidden}>Menu</button>
        </nav>
      )
    } else {
      return(
        <nav id="menuNav">
          <button id="menuTitle" onClick={this.toggleHidden}>Menu</button>
          <ul id="menu">
            <li><a href="/dashboard">Dashboard</a></li>
            <li><a href="/comms">Comms</a></li>
            <li><a href="/academics">Academics</a></li>
            <li><a href="/registration">Registration</a></li>
            <li><a href="/library">Library</a></li>
            <li><a href="/settings" className="greyed-out">Settings</a></li>
            <li><a href="/" className="greyed-out">Logout</a></li>
          </ul>
        </nav>
      )
    }
  }
}

export default NavMenu
