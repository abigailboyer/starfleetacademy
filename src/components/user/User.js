import React from 'react'
import UserContext from '../../providers/UserProvider'
import {FirebaseContext} from '../../firebase'

function User(props) {
  return(
    <FirebaseContext.Consumer>
      {firebase => (
        <section id="user">
          <p>connected</p>
          <button id="logout">Logout</button>
        </section>
      )}
    </FirebaseContext.Consumer>
  )
}

export default User
