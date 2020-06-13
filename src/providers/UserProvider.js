import React, {Component} from 'react'
import {auth} from '../firebase/firebase'
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {
  state = {
    user: null
  }

  componentDidMount = () => {
    auth.onAuthStateChanged(userAuth => {
      this.setState({user: userAuth});
    });
  }

  render() {
    return (
      <Provider value={this.state.user}>
        {this.props.children}
      </Provider>
    )
  }
}

export {UserContextProvider, Consumer as UserContextConsumer}
