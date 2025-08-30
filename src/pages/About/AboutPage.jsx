import React from "react";
import "./AboutPage.css";

/* Components */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import cv from "../../cv/cv.pdf";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
import imgabout from "../../img/profile.jpg";

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="cv.pdf"
                className="btn-codigo cv buttonDownload"
              >
                <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id="about-info-1"
                  defaultMessage="Hi, I'm Mathew Jolly — a passionate web designer and web developer with 3 years of experience. Since I started creating websites, I’ve been fascinated by how design and technology come together to build amazing digital experiences. Every project I work on fuels my creativity and keeps me motivated to grow as a developer."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id="about-info-2"
                    defaultMessage="I’m self-taught and constantly learning — always exploring new technologies, frameworks, and best practices to improve my craft. I believe in continuous growth and adapting to the ever-changing world of web development."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id="about-info-3"
                    defaultMessage="Over the past few years, I’ve worked on a variety of personal and freelance projects, where I’ve sharpened my skills and learned how to deliver solutions that meet both technical and creative needs. My ultimate goal is to create impactful, user-friendly, and innovative digital experiences."
                  />
                </p>

                <p>
                  <FormattedMessage
                    id="about-info-4"
                    defaultMessage="Beyond coding, I enjoy cycling, programming as a hobby, and coming up with new inventions — activities that keep me inspired and innovative in my work."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div
                  className="custom-btn btn-codigo"
                  id="btn-hide"
                  onClick={readMore}
                >
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">Skills</h1>
            <div className="skill-container">
              {/* HTML */}
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="HTML"
                  className="skills-img icon-li"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
                  title="HTML5"
                />
                <h2 className="skill-name">HTML</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-1"
                    defaultMessage="Solid experience building semantic and accessible structures for modern websites."
                  />
                </p>
              </div>

              {/* CSS */}
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="CSS"
                  className="skills-img icon-li"
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
                  title="CSS3"
                />
                <h2 className="skill-name">CSS</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-2"
                    defaultMessage="Skilled in creating responsive layouts and modern UI designs with CSS and preprocessors."
                  />
                </p>
              </div>

              {/* JavaScript */}
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="Js"
                  className="skills-img icon-li"
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png"
                  title="JavaScript"
                />
                <h2 className="skill-name">JavaScript</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-3"
                    defaultMessage="3 years of experience using JavaScript for both front-end and back-end development."
                  />
                </p>
              </div>

              {/* React */}
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="React"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                  title="React"
                />
                <h2 className="skill-name">React</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-4"
                    defaultMessage="Currently learning ReactJS and exploring how to build interactive and dynamic user interfaces."
                  />
                </p>
              </div>

              {/* Node.js */}
              {/* <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="NodeJs"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                  title="Node.js"
                />
                <h2 className="skill-name">Node.js</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-5"
                    defaultMessage="Proficient in creating back-end services and APIs with Node.js and Express."
                  />
                </p>
              </div> */}

              {/* PHP */}
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="PHP"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                  title="PHP"
                />
                <h2 className="skill-name">PHP</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-6"
                    defaultMessage="Strong experience in developing dynamic web applications using PHP."
                  />
                </p>
              </div>

              {/* MySQL */}
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="MySQL"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                  title="MySQL"
                />
                <h2 className="skill-name">MySQL</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-7"
                    defaultMessage="Experienced in designing and managing relational databases with MySQL."
                  />
                </p>
              </div>

              {/* C */}
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="C"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
                  title="C"
                />
                <h2 className="skill-name">C</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-8"
                    defaultMessage="Solid foundation in problem-solving and algorithms using C language."
                  />
                </p>
              </div>

              {/* C++ */}
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="C++"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  title="C++"
                />
                <h2 className="skill-name">C++</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-9"
                    defaultMessage="Good knowledge of object-oriented programming and system-level problem solving in C++."
                  />
                </p>
              </div>

              {/* Java */}
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="Java"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
                  title="Java"
                />
                <h2 className="skill-name">Java</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-10"
                    defaultMessage="Currently learning JavaScript and exploring core concepts."
                  />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="Git"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                  title="Git"
                />
                <h2 className="skill-name">Git</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-6"
                    defaultMessage="Version control expert, experienced with branching, merging, and collaboration workflows using Git."
                  />
                </p>
              </div>

              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="GitHub"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  title="GitHub"
                />
                <h2 className="skill-name">GitHub</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-7"
                    defaultMessage="Experienced with hosting, collaborating, and managing projects on GitHub."
                  />
                </p>
              </div>
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="VS Code"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                  title="Visual Studio Code"
                />
                <h2 className="skill-name">VS Code</h2>
                <p className="skill-info">
                  <FormattedMessage
                    id="about-skills-8"
                    defaultMessage="Efficient in using VS Code with extensions and debugging tools to boost productivity."
                  />
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};
export default About;
