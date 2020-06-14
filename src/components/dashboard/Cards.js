import React from 'react'
import Comms from './Comms'
import Weather from './Weather'
import Schedule from './Schedule'
import Courses from './Courses'
import Tracker from './Tracker'
import StudentInfo from './StudentInfo'

function Cards() {
  return(
    <section id="cardContainer">
      <section className="card comms">
        <Comms />
      </section>
      <section className="card weather">
        <Weather />
      </section>
      <section className="card schedule">
        <Schedule />
      </section>
      <section className="card courses">
        <Courses />
      </section>
      <section className="card tracker">
        <Tracker />
      </section>
      <section className="card studentInfo">
        <StudentInfo />
      </section>
    </section>
  )
}

export default Cards
