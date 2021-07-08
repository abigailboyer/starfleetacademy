import React from 'react'
import Header from '../Header'
import Nav from '../Nav'
import Cards from './Cards'
import NavMenu from './NavMenu'
import Firebase, {FirebaseContext} from '../../firebase'

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    Firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        console.log("signed in");
      } else {
        this.props.history.push('/login');
        console.log("user not logged in");
      }
    });
  }

  render() {
    return(
      <section>
      <Cards />
      </section>
    )
  }
}

export default Dashboard
