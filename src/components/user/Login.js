import React from 'react'
import {Link} from 'react-router-dom'
import AccountHeader from './AccountHeader'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return(
      <main>
        <AccountHeader />

        <section id="signin">
          <form id="signin-form">
            <ul>
              <li>
                <input type="text" id="username" placeholder="Username" />
              </li>
              <li>
                <input type="password" id="password" placeholder="Password" />
              </li>
              <li>
                <input type="submit" id="signin-form-submit" value="Login" />
              </li>
            </ul>
          </form>

          <p id="createAccount">Or <Link to="Signup">create an account</Link></p>
        </section>
      </main>
    )
  }
}

export default Login
