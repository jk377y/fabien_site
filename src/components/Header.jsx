import { useState , useEffect} from 'react'
import image from '../images/reactatar.png';
import tIcon from '../images/twitter.png';
import lIcon from '../images/linkedin.png';
import gIcon from '../images/git.png';


const Header = () => {

  const [nav, setNav] = useState("about-container");

  useEffect(() => {
    setNav("about-container");
  }, []);

  const handleClick = (link) => {
    setNav(link);
  };

  return (
    <header id="header">
      <img id="avatar" src={image} alt="profile picture" />
      <h1 id="name-plate">Fabien Moreno</h1>
      <h2 id="role-title">Data Analyst</h2>
      <nav id="navbar">
        <li className="nav-item">
          <a
            className={`anchor-item ${
              nav === "about-container" ? "current-page" : ""
            }`}
            title="About"
            onClick={() => handleClick("about-container")}
            href="#about-container"
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`anchor-item ${
              nav === "portfolio-container" ? "current-page" : ""
            }`}
            title="Portfolio"
            onClick={() => handleClick("portfolio-container")}
            href="#portfolio-container"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`anchor-item ${
              nav === "resume-container" ? "current-page" : ""
            }`}
            title="Resume"
            onClick={() => handleClick("resume-container")}
            href="#resume-container"
          >
            Resume
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`anchor-item ${
              nav === "contact-w-photo-div" ? "current-page" : ""
            }`}
            title="Contact"
            onClick={() => handleClick("contact-w-photo-div")}
            href="#contact-w-photo-div"
          >
            Contact
          </a>
        </li>
      </nav>
      <div id="icon-container">
        <a href="https://twitter.com/" target="_blank">
          <img id="tIcon" src={tIcon} alt="twitter icon" />
        </a>
        <a href="https://github.com/fabien1313" target="_blank">
          <img id="gIcon" src={gIcon} alt="linkedin icon" />
        </a>
        <a href="https://www.linkedin.com/in/fabien-moreno/" target="_blank">
          <img id="lIcon" src={lIcon} alt="linkedin icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;