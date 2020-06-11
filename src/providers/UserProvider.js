import React, {Component} from 'react'
const {Provider, Consumer} = React.createContext()

class UserContextProvider extends Component {
  render() {
    return (
      <Provider value={"James T. Kirk"}>
        {this.props.children}
      </Provider>
    )
  }
}

export {UserContextProvider, Consumer as UserContextConsumer}
