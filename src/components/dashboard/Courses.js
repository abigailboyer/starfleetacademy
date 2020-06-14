import React from 'react'
import Course from './Course'

function Courses() {
  /* programatically populate course information */
  return (
    <article className="card" id="courses">
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
      <Course />
    </article>
  )
}

export default Courses
