import React from 'react'

function StudentInfo() {
  return (
    <article className="card yellowBorder" id="studentInfo">
      <ul>
        <li><b>Student:</b> Kirk, James T.</li>
        <li id="student-ID"><b>ID:</b> 20384</li>
        <li id="student-rank"><b>Rank:</b> Cadet</li>
        <li><b>Track:</b> Command - Engineering</li>
        <li><b>Advisor:</b> Capt. Christopher Pike</li>
      </ul>
    </article>
  )
}

export default StudentInfo
