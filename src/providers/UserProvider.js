import React, {Component} from 'react'
import {auth} from '../firebase/firebase'
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {
  state = {
    user: null,
    username: ''
  }

  componentDidMount = () => {
    auth.onAuthStateChanged(userAuth => {
      this.setState({user: userAuth});
      console.log("current user: " + userAuth.uid);
      this.setState({username: userAuth.uid})
    });
  }

  render() {
    return (
      <Provider value={this.state.username}>
        {this.props.children}
      </Provider>
    )
  }
}

export {UserContextProvider, Consumer as UserContextConsumer}
