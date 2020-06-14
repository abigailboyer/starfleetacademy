import React from 'react'
import {UserContextConsumer} from '../../providers/UserProvider'
import {FirebaseContext} from '../../firebase'
import Logout from './Logout'

function User(props) {
  return(
    <FirebaseContext.Consumer>
      {firebase => (
        <UserContextConsumer>
          {user => (
            <section id="user">
              <p>{user}</p>
              <Logout />
            </section>
          )}
        </UserContextConsumer>
      )}
    </FirebaseContext.Consumer>
  )
}

export default User
