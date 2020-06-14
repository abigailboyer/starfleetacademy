import React from 'react'
import {Link} from 'react-router-dom'
import AccountHeader from './AccountHeader'
import Firebase, {FirebaseContext} from '../../firebase'
import auth from '../../firebase/firebase'
import firestore from '../../firebase/firebase'
import {UserContextConsumer} from '../../providers/UserProvider'

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      homeworld: '',
      species: '',

      username: '',
      email: '',
      password1: '',
      password2: '',
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.runTwoFunctions = this.runTwoFunctions.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.username, this.state.password2);

    /* should i be doing it like this idk */
    const {
      username,
      email,
      password1
    } = this.state;

    Firebase.auth().createUserWithEmailAndPassword(email, password1).catch(function(error) {
      console.log(error);
    }).catch(
      console.log("account created"),
      Firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          console.log(user.uid);
        } else {
          console.log("logged out");
        }
      }),
      this.props.history.push("/")
    )

  }

  runTwoFunctions(e) {
    this.handleChange(e);
    /* maybe i should just run this after submitting so i dont have to do this */
    this.createUsername();
  }

  createUsername() {
    /* create username based off of name input */

    /* remove any punctuation */
    /* separate name by spaces */
    /* use first letter of input and last section of text */
    /* if only one word, use whole word or last 10 letters or something */
    /* check if the database already has that username, add numbers to the end until its available */
    /* print username to form */

    /* for now, just hardcode it */
    this.setState({username: "usertest"});
    console.log(this.state.username);
  }

  render() {
    const {
      name,
      homeworld,
      species,
      username,
      email,
      password1,
      password2,
      error
    } = this.state;

    const isInvalid =
      password1 !== password2 ||
      password1 === '' ||
      email === '' ||
      name === '' ||
      homeworld === '' ||
      species === '';

    return (
      <main>
        <AccountHeader />

        <form id="signup" onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Jim Kirk"
                value={name}
                onChange={this.runTwoFunctions}
              />
            </li>
            <li>
              {/* change to something more graphic and pretty to
                match specialization selection & change to limited options later */}
              <label htmlFor="homeworld">Homeworld</label>
              <input
                type="text"
                id="homeworld"
                placeholder="Earth"
                onChange={this.handleChange}
                value={homeworld}
              />
            </li>
            <li>
              {/* change to drop down options later */}
              <label htmlFor="species">Species</label>
              <input
                type="text"
                id="species"
                placeholder="Human"
                onChange={this.handleChange}
                value={species}
              />
            </li>
            <li>
              <p id="generatedUsername">Your username: </p>
            </li>
            <li>
              <label htmlFor="userEmail">Email</label>
              <input
                type="email"
                id="email"
                placeholder="jimkirk@gmail.com"
                onChange={this.handleChange}
                value={email}
              />
            </li>
            <li>
              <label htmlFor="password1">Password</label>
              <input
                type="password"
                id="password1"
                placeholder="Password"
                onChange={this.handleChange}
                value={password1}
              />
            </li>
            <li>
              <label htmlFor="password2">Password</label>
              <input
                type="password"
                id="password2"
                placeholder="Password Confirmation"
                onChange={this.handleChange}
                value={password2}
              />
            </li>

            <li>
              <input
              type="submit"
              disabled={isInvalid}
              id="signup-form-submit"
              value="Continue"
            />
            </li>
            <li id="form-error-message">
              {/* for later */}
            </li>
          </ul>
        </form>
      </main>
    )
  }
}

export default Signup
