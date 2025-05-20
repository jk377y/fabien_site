import React from 'react'
import credentials from '../images/resume.pdf'

const Resume = () => {
  return (
    <section id="resume-container">
      <h2 id="resume-title">Resume</h2>

      <div id="cv-btn-container">
      <a href={credentials} download><button id="cv-btn">Download CV</button></a>
      </div>
       

    </section>
  )
}

export default Resume