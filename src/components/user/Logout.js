import React from 'react'
import Firebase from '../../firebase'
import { Link } from 'react-router-dom'
import Login from './Login.js'

class Logout extends React.Component {
  constructor() {
    super();
    this.state = {

    };
    this.handleClick = this.handleClick.bind(this);
  }

  //can't figure out how to redirect AND handle the event in the same function because this.props.history.push doesn't work since this is a child component
  //will come back to this, leaving logout function on the login page itself so the logout will happen after redirect
  handleClick(e) {
    e.preventDefault();

    Firebase.auth().signOut().then(function() {
      console.log("signed out");
      this.props.history.push('/login');
    }).catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <li className="greyed-out"><Link to='/login'>Logout</Link></li>
      //<button id="logout" className="greyed-out" onClick={this.handleClick}>Logout</button>
      //<li><a href="/" className="greyed-out" id="logout" onClick={this.handleClick}>Logout</a></li>
    )
  }
}

export default Logout
