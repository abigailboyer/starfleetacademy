import React from 'react'
import {UserContextConsumer} from '../../providers/UserProvider'

function User(props) {
  return(
    <UserContextConsumer>
      {user => (
        <section id="user">
          <p>{user}</p>
          <button id="logout">Logout</button>
        </section>
      )}
    </UserContextConsumer>
  )
}

export default User
