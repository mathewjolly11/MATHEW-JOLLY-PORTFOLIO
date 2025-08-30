import React from "react";
import "../../pages/About/AboutPage.css";
import { Link } from "react-router-dom";
import cv from "../../cv/cv.pdf";
import { ButtomGet } from "../ButtomGet/ButtomGet";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const About = () => (
  <section className="sobre-mi" id="sobre-mi">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id="im" defaultMessage="who I am" />
        </h3>
        <h4>
          <FormattedMessage
            id="description"
            defaultMessage="My name is Mathew Jolly and I am a full stack developer."
          />
        </h4>
        <p>
          <FormattedMessage
            id="my-description"
            defaultMessage="I am a Computer Applications student with hands-on experience in web development projects. I enjoy building practical applications like transport management systems, marketplaces, and portfolio websites. I’m always learning new technologies to strengthen my skills and follow best practices as a developer."
          />
        </p>
        <ul>
          <li>
            <p>
              <span>
                <FormattedMessage id="years" defaultMessage="Age:" />
              </span>
              20
            </p>
          </li>
          <li>
            <p>
              <span>Hobbies: </span>
              Programming 💻, Innovating new inventions 🔬⚡, and Cycling 🚴‍♂️
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> mathewjolly11@gmail.com
            </p>
          </li>
          <li>
            <p>
              <span>
                <FormattedMessage id="from" defaultMessage="From: " />
              </span>
              Kerala, India
            </p>
          </li>
        </ul>
        <div className="mas-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="cv.pdf"
            className="btn-codigo buttonDownload"
          >
            <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
          </a>
          <div className="mas-info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
<h3>Skills</h3>

{/* Front-End */}
<h4>Front-End</h4>
<div className="skill">
  <div>
    <img alt="HTML" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
    <h5>HTML</h5>
  </div>
  <div>
    <img alt="CSS" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
    <h5>CSS</h5>
  </div>
  <div>
    <img alt="Bootstrap" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
    <h5>Bootstrap</h5>
  </div>
  <div>
    <img alt="JavaScript" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
    <h5>JavaScript</h5>
  </div>
  <div>
    <img alt="React" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
    <h5>ReactJS</h5>
  </div>
</div>

{/* Back-End */}
<h4>Back-End</h4>
<div className="skill">
  <div>
    <img alt="PHP" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
    <h5>PHP</h5>
  </div>
  <div>
    <img alt="MySQL" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
    <h5>MySQL</h5>
  </div>
  {/* <div>
    <img alt="Java" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
    <h5>Java</h5>
  </div> */}
  <div>
    <img alt="C" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
    <h5>C</h5>
  </div>
  <div>
    <img alt="C++" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
    <h5>C++</h5>
  </div>
</div>

{/* Version Control */}
<h4>Version Control</h4>
<div className="skill">
  <div>
    <img alt="Git" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />
    <h5>Git</h5>
  </div>
  <div>
    <img alt="GitHub" className="icons-skils"
     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    style={{ filter: "invert(1)" }} />
    <h5>GitHub</h5>
  </div>
</div>

{/* Tools */}
<h4>Tools</h4>
<div className="skill">
  <div>
    <img alt="VS Code" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
    <h5>VS Code</h5>
  </div>
  <div>
    <img alt="WampServer" className="icons-skils"
      src="https://img.icons8.com/color/344/database.png" />
    <h5>WampServer</h5>
  </div>
  <div>
    <img alt="Linux" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
    <h5>Linux</h5>
  </div>
</div>

{/* Deployment & Design */}
<h4>Deployment & Design</h4>
<div className="skill">
  <div>
    <img alt="Vercel" className="icons-skils"
    src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/vercel.svg"
    style={{ filter: "invert(1)" }} />  
    <h5>Vercel</h5>
  </div>
  <div>
    <img alt="Firebase" className="icons-skils"
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" />
    <h5>Firebase</h5>
  </div>
  <div>
    <img alt="Photoshop" className="icons-skils"
     src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/adobephotoshop.svg"
    style={{ backgroundColor: "#001E36", padding: "5px", borderRadius: "8px" }} />
    <h5>Photoshop</h5>
  </div>




        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
