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
      <article className="container" id="commsContainer">
        <Comms />
        <p className="subtext">Go to comms ></p>
      </article>
      <article className="container" id="weatherContainer">
        <Weather />
      </article>
      <article className="container" id="scheduleContainer">
        <Schedule />
        <p className="subtext">View detail schedule ></p>
      </article>
      <article className="container" id="coursesContainer">
        <Courses />
        <p className="subtext">Go to class detail ></p>
      </article>
      <article className="container" id="trackerContainer">
        <Tracker />
        <p className="subtext">for 2252.0219</p>
      </article>
      <article className="container" id="studentInfoContainer">
        <StudentInfo />
        <p className="subtext">Petition for track change ></p>
      </article>
    </section>
  )
}

export default Cards
