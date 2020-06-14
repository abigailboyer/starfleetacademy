import React from 'react'
import {Link} from 'react-router-dom'
import AccountHeader from './AccountHeader'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("signed in");
  }

  render() {
    const {
      username,
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password === '' ||
      username === '';

    return(
      <main>
        <AccountHeader />

        <section id="signin">
          <form id="signin-form">
            <ul>
              <li>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <input
                  type="submit"
                  id="signin-form-submit"
                  value="Login"
                  disabled={isInvalid}
                />
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
