import React from 'react'
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
              {/* change to radio or drop down options later */}
              <label htmlFor="species">Species</label>
              <input type="text" id="species" placeholder="Human" />
            </li>
            <li>
              {/* change to something more graphic and pretty to
                match specialization selection & change to limited options later */}
              <label htmlFor="homeworld">Homeworld</label>
              <input type="text" id="homeworld" placeholder="Earth" />
            </li>
            <li>
              {/* change to drop down options later */}
              <label htmlFor="species">Species</label>
              <input type="text" id="species" placeholder="Human" />
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
              <input type="submit" id="signup-form-submit" value="Continue" />
            </li>
          </ul>
        </form>
      </main>
    )
  }
}

export default Signup
