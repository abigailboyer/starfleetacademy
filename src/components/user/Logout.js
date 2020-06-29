import React from 'react'
import Firebase from '../../firebase'

class Logout extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  handleClick() {
    Firebase.auth().signOut().then(function() {
      console.log("signed out");
      this.props.history.push("/login")
    }).catch(function(error) {
      console.log(error);
    })
  }

  render() {
    return (
      <button id="logout" onClick={this.handleClick}>Logout</button>
    )
  }
}

export default Logout
