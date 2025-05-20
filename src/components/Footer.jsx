import React from 'react'
import github from '../images/githubfooter.png'
import linkedin from '../images/linkedinfooter.png'
import twitter from '../images/twitterfooter.png'

const Footer = () => {
  return (
    <section>

      <div id="footer-container">
        <a href="https://twitter.com/" target="_blank"><img className="footer-icons" src={ twitter } alt="GitHub" /></a>
        <a href="https://github.com/fabien1313" target="_blank"><img className="footer-icons" src={ github } alt="LinkedIn" /></a>
        <a href="https://www.linkedin.com/in/fabien-moreno/" target="_blank"><img className="footer-icons" src={ linkedin } alt="Twitter" /></a>
      </div>

      
    </section>
  )
}

export default Footer