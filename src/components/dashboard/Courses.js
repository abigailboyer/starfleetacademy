import React from 'react'
import Course from './Course'

function Courses() {
  /* programatically populate course information */
  return (
    <article className="card" id="courses">
      <hgroup>
        <h3>Courses</h3>
        <h5>Spring 2235</h5>
      </hgroup>
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
