import React from 'react'
import {Link} from 'react-router-dom'
import AccountHeader from './AccountHeader'
import Firebase, {FirebaseContext} from '../../firebase'
import starfleetacademy from '../../images/starfleet-academy.jpg'

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    var user = Firebase.auth().currentUser;
    console.log(user);

    Firebase.auth().signOut().then(function() {
      console.log("signed out");
      this.props.history.push('/login');
    }).catch(function(error) {
      console.log(error);
    });

    var user2 = Firebase.auth().currentUser;
    console.log(user2);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    const {
      email,
      password
    } = this.state;

    Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      console.log(error);
    });

    console.log("signed in");
    this.props.history.push("/");
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return(
      <main id="account">
        <section className="accountForm">
          <AccountHeader />
          <form id="signin-form" onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  value={email}
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

          <p id="signupLink">Or <Link to="Signup">create an account</Link></p>
        </section>
      </main>
    )
  }
}

export default Login
