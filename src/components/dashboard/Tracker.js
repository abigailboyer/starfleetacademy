import React from 'react'

function Tracker() {
  return (
    <article className="card redBorder" id="tracker">
      <ul>
        <li>
          <label htmlFor="meal-credits-progress">Meal Credits</label>
          <progress id="meal-credits-progress" max="100" value="75">75%</progress>
        </li>
        <li>
          <label htmlFor="water-credits-progress">Water Credits</label>
          <progress id="water-credits-progress" max="100" value="25">25%</progress>
        </li>
        <li>
          <label htmlFor="energy-progress">Energy Consumption</label>
          <progress id="energy-progress" max="200" value="10">10%</progress>
        </li>
      </ul>
    </article>
  )
}

export default Tracker
