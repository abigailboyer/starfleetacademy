import React from 'react'
import {UserContextConsumer} from '../../providers/UserProvider'
import {FirebaseContext} from '../../firebase'

function User(props) {
  return(
    <FirebaseContext.Consumer>
      {firebase => (
        <UserContextConsumer>
          {user => (
            <section id="user">
              <p>{user}</p>
              <button id="logout">Logout</button>
            </section>
          )}
        </UserContextConsumer>
      )}
    </FirebaseContext.Consumer>
  )
}

export default User
