import React from 'react'
import thedailydose from '../images/thedailydose.png';
import socialDose from '../images/socialdose.png';
import workDay from '../images/workday.png';
import weatherDash from '../images/weatherdash.png';
import noteTaker from '../images/notetaker.png';
import passGen from '../images/passgen.png';
import project from '../images/project3.png';

const Portfolio = () => {
  return (
    <section id="portfolio-container">
      <h2 id="portfolio-title">Portfolio</h2>

      <div className="project-container">
        <p className="project-text">This data-driven MERN-stack single-page application was built to explore the intersection of artificial intelligence and data visualization by creating an interactive platform for showcasing AI-generated art. Leveraging a scalable MongoDB backend and a GraphQL API, the project captures, structures, and delivers complex metadata about each art piece, enabling users to interact with curated content in real time. An Express.js and Node.js server ensures efficient data flow and secure operations, while the React front end provides a polished, responsive user experience. The platform includes JWT-based authentication to protect user data and interaction history, while sensitive API key data is securely managed on the server side. This project not only highlights the use of structured and unstructured data to drive user engagement, but also reinforces best practices in data security, application scalability, and clean repository management.
        </p>
        <figure>
        <figcaption>Robotic RenAIssance</figcaption>
        <img className="project-photo" src={ project } alt="Tech Blog Project"/>
        </figure>
      </div>

      <div className="btn-div">
      {/* <a href="https://robotic-renaissance.herokuapp.com/" target="_blank"><button id="demo-btn">Live Demo</button></a>  */}
      <a href="https://github.com/fabien1313/Robotic_RenAIssance" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>
  
      <div className="project-container">
        <p className="project-text">This data-driven CMS-style blog platform was built to support the exchange of technical knowledge through structured content creation and user engagement. Designed for developers, the application enables users to publish blog posts, comment on peer content, and interact within a focused, community-drive environment. The system captures and organizes user-generated content and egagement data to better understand behavior patterns, post popularity, and content trends over time. Structured around CRUD operations, the application features a well-structured back end that stores blog and comment data with relational integrity, ensuring efficient data retrieval and manipulation. Each post and interaction is logged, forming a rich dataset that could support future analytics on user activity, trending technologies, or contributor impact. The front end provides an intuitive interface for content management, while secure authentication protects user identities and ensures reliable access control. Beyond replicating features similar to WordPress, this project demonstrates my ability to build data-centric applications that scale, support meaningful user interaction, and maintain data integrity. It reflects my growing focus on how data can inform design, influence community dynamics, and power digital platforms built with purpose.
        </p>
        <figure>
        <figcaption>The Daily Dose</figcaption>
        <img className="project-photo" src={ thedailydose } alt="Tech Blog Project"/>
        </figure>
      </div>

      <div className="btn-div">
      {/* <a href="https://thedailydose.herokuapp.com/" target="_blank"><button id="demo-btn">Live Demo</button></a>  */}
      <a href="https://github.com/fabien1313/TheDailyDose" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        This project involved developing a robust, data-centric API for a social networking application that enables users to post thoughts, react to others' content, and manage a dynamic list of friend connections. Designed with scalability and effiency in mind, the API was built using Express.js for routing and MongoDB paired with Mongoose ODM for structured data modeling and database interaction. The focus of the project was on designing flexible schemas capable of handling complex, unstructured social interaction data at scale. By leveraging MongoDB's document-based storage, I was able to manage high-volume datasets while maintaining performance and adaptability. Mongoose provided schema validation and logical data structuring, making relationships between users, posts, and reactions easy to maintain and query. To track user activity and content timelines, I implemented timestamp formatting using native JavaScript Date objects, enabling clear visibility into user engagement and content freshness.
        </p>
        <figure>
          <figcaption>Social Dose</figcaption>
        <img className="project-photo" src={ socialDose } alt="Social Network API" />
        </figure>
      </div>

      <div className="btn-div">
      {/* <a href="https://drive.google.com/file/d/1_F4EDyZYJi2q_Bfcg8IwpA-nV3ETN_YH/view" target="_blank"><button id="demo-btn">Live Demo</button></a>  */}
      <a href="https://github.com/fabien1313/SocialDose-API" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        I recently built a simple calendar application that allows users to save events for each hour of the day. This browser-based app features dynamically updated HTML and CSS powered by jQuery.

        To create this application, I utilized my skills in HTML, CSS, JavaScript, and jQuery. The app allows users to view the current date and time and add events for each hour of the day. The events are saved to local storage, so users can return to the page and view their saved events.

        The dynamically updated HTML and CSS provide a sleek and modern interface for the user, making it easy to view and manage events. This app is versatile and can be used for a variety of purposes, such as managing a busy work schedule or keeping track of personal appointments.

        Overall, the calendar application I built showcases my skills in front-end development and provides a valuable tool for managing daily tasks and events.
        </p>
        <figure>
          <figcaption>Workday Schedular</figcaption>
        <img className="project-photo" src={ workDay} alt="Work Day Schedular" />
        </figure>
      </div>

      <div className="btn-div">
      <a href="https://fabien1313.github.io/dayscheduler/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/dayscheduler" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        This project involves building a weather dashboard that retrieves weather data from a third-party API and displays it in a user-friendly format. The dashboard runs in a web browser and features dynamically updated HTML and CSS, providing users with up-to-date weather information for various cities. The importance of this project lies in its ability to help users plan their activities and stay informed about weather conditions in different locations. By leveraging the data provided by the 5 Day Weather Forecast API, developers can create a dashboard that is both reliable and accurate. The dashboard can display key weather metrics such as temperature, humidity, and wind speed, as well as provide visual representations such as charts and graphs to help users easily interpret the data. This project is an excellent demonstration of a developer's ability to work with third-party APIs and create a useful and visually appealing application for end-users.
        </p>
        <figure>
          <figcaption>Weather Dashboard</figcaption>
        <img className="project-photo" src={ weatherDash} alt="Weather Dashboard Application" />
        </figure>
      </div>

      <div className="btn-div">
      <a href="https://fabien1313.github.io/weather-application/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/weather-application" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        This project involves building a note-taking application that uses an Express.js back end to save and retrieve note data from a JSON file. The application allows users to write and save notes, providing a convenient way to organize and track their ideas, thoughts, and reminders. The importance of this project lies in its ability to help users manage their workflow and increase productivity. With the ability to easily create and store notes, users can quickly capture ideas, prioritize tasks, and keep track of important information. The Express.js back end provides a fast and reliable way to store and retrieve note data, ensuring that users can access their notes whenever and wherever they need them. This project is an excellent example of a developer's ability to create a robust and functional application that meets the needs of end-users, leveraging the power of Express.js to provide a seamless and efficient note-taking experience.
        </p>
      <figure>
        <figcaption>Note Taker</figcaption>
        <img className="project-photo" src={ noteTaker} alt="Note Taker Application" />
      </figure>
      </div>

      <div className="btn-div">
      {/* <a href="https://fabien1313-noteapp.herokuapp.com/" target="_blank"><button id="demo-btn">Live Demo</button></a>  */}
      <a href="https://github.com/fabien1313/Note_taking_app" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

      <div className="project-container">
        <p className="project-text">
        This project involves building a password generator application that runs in a web browser and generates a random password based on criteria selected by the user. The application features a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. The importance of this project lies in its ability to provide users with a secure and reliable way to generate strong passwords that meet their specific requirements. With the increasing importance of online security, it is crucial for individuals and organizations to use strong and unique passwords for their accounts. This password generator application leverages the power of JavaScript to generate random passwords that can include a mix of uppercase and lowercase letters, numbers, and special characters. The user can select the length of the password and which character types to include, providing a flexible and customizable solution to password generation. This project is an excellent example of a developer's ability to create a functional and user-friendly application that meets the needs of end-users, contributing to the overall goal of improving online security.
        </p>
      <figure>
        <figcaption>Password Generator</figcaption>
        <img className="project-photo" src={ passGen } alt="Work Day Schedular" />
      </figure>
      </div>

      <div className="btn-div">
      <a href="https://fabien1313.github.io/PassGenJS/" target="_blank"><button id="demo-btn">Live Demo</button></a> <a href="https://github.com/fabien1313/PassGenJS" target="_blank"><button id="repo-btn">Repository</button></a>
      </div>

    

    </section>
  )
}

export default Portfolio