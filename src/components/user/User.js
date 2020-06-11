import React from 'react'
import UserContext from '../../providers/UserProvider'

function User(props) {
  return(
    <UserContext.Consumer>
      {user => (
        <section id="user">
          <p>{user}</p>
          <button id="logout">Logout</button>
        </section>
      )}
    </UserContext.Consumer>
  )
}

export default User
