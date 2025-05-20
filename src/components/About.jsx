import React from 'react'
import image from '../images/profile.png'

const About = () => {
  return (
    <div id="about-container">
      <h2 id="about-title">About Me</h2>
      <div id="about-text-pic-container">
      <p id="about-text">
      Hi! My name is <span id="name">Fabien</span>. I'm a data professional currently working as a Data Analyst, with a strong foundation in full-stack web development and a passion for uncovering insights through data. While working on full-stack projects, I discovered the power of data, specifically the way SQL can be used to extract meaning from complex datasets. That discovery sparked a deeper interest in data analysis and led me to pivot my career toward solving business problems with data-drive solutions.
      <br />
      As a Data Analyst, I work daily with SQL, Excel, Python, and Power BI to transform raw data into actionable insights that drive smarter decisions. I automate reporting workflows, build inuitive dashboards, and analyze large datasets to uncover trends and root causes. I take pride in breaking down complex problems, delivering clear and impactful analyses, and ensuring data integrity every step of the way. I'm driven by a mindset of continuous improvement. I refine my skills through hands-on problem solving, thoughtful iteration, and a commitment to delivering reliable, impactful results.
  


      
      
      </p>
      <img id= "profile-pic" src={ image } alt="" />
      </div>
    </div>
  )
}

export default About