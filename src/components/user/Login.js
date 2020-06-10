import React from 'react'
import AccountHeader from './AccountHeader'

function Login() {
  return(
    <main>
      <AccountHeader />

      <section id="signin">
        <form id="signin-form">
          <ul>
            <li>
              <input type="text" id="username" placeholder="Username" />
            </li>
            <li>
              <input type="password" id="password" placeholder="Password" />
            </li>
            <li>
              <input type="submit" id="signin-form-submit" value="Login" />
            </li>
          </ul>
        </form>
      </section>
    </main>
  )
}

export default Login
