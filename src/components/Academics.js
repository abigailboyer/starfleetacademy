import React from 'react'

function Academics() {
  return(
    /* command only for now */
    <section id="academics" className="card container yellowBorder">
      <section id="cirriculum">
        <ul>
          <li>
            <h4>Core Cirriculum</h4>
            <ul>
              <li className="category">
                Category
                <p className="smallText">Six credits from:</p>
                <ul className="list">
                  <li>Course 101: Warp Theory</li>
                  <li>Course 103: Ancient Wars</li>
                </ul>
              </li>
              <li className="category">
                Category
                <p className="smallText">Six credits from:</p>
                <ul className="list">
                  <li>Course 101</li>
                  <li>Course 103</li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <h4>Specialization (Command)</h4>
          </li>
          <li>
            <h4>Minor (Physics)</h4>
          </li>
        </ul>
      </section>
      <section id="planOfStudy">
      </section>
      <section id="completionTracker">

      </section>
    </section>
  )
}

export default Academics
