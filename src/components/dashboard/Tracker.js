import React from 'react'

function Tracker() {
  return (
    <article className="card" id="tracker">
      <ul>
        <li>
          <label for="meal-credits-progress">Meal Credits</label>
          <progress id="meal-credits-progress" max="100" value="75">75%</progress>
        </li>
        <li>
          <label for="water-credits-progress">Water Credits</label>
          <progress id="water-credits-progress" max="100" value="25">25%</progress>
        </li>
        <li>
          <label for="energy-progress">Energy Consumption</label>
          <progress id="energy-progress" max="200" value="10">10%</progress>
        </li>
      </ul>
    </article>
  )
}

export default Tracker
