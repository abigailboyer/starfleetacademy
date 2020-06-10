import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AccountHeader from './AccountHeader'

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <main>
        <AccountHeader />

        <form id="signup">
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Jim Kirk" />
            </li>
            <li>
              <p id="generatedUsername">Your username: </p>
            </li>
            <li>
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Password" />
            </li>
            <li>
              <label htmlFor="passwordConfirmation">Password</label>
              <input type="password" id="passwordConfirmation" placeholder="Password Confirmation" />
            </li>
            <li>
              <input type="submit" id="signup-form-submit" value="Sign Up" />
            </li>
          </ul>
        </form>
      </main>
    )
  }
}

export default Signup
