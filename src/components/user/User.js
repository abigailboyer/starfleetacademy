import React from 'react'

function User() {
  return(
    <section>
      {/* 1. icon based upon student's track */}
      {/* 2. student's name generated from state */}
      {/* 3. arrow to click on for drop down menu */}
      {/* drop down menu contains user settings and logout */}
      James T. Kirk
      <button id="logout">Logout</button>
    </section>
  )
}

export default User
