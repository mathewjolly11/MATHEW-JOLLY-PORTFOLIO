import React, { useState } from 'react';
import './ProjectPage.css';
import Modal from "./Modal";
import { NavLink } from 'react-router-dom';
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import { FormattedMessage } from 'react-intl';

const proyectsImg = require.context('../../img', true);

const projectsData = [
  {
    id: 1,
    title: "RushRide",
    img: "rushride.png",
    preview: "rushride.png",
    description: "RushRide: Local taxi pooling and transport management web application.",
    features: "Features include driver booking, route management, and user-friendly interface.",
    link: "https://rushridetaxipooling.vercel.app/",
    technologies: ["html5", "css3", "javascript", "php"]
  },
  {
    id: 2,
    title: "AVJ Farm",
    img: "avjfarm.png",
    preview: "avjfarm.png",
    description: "AVJ Farm: Marketplace connecting farmers directly to consumers.",
    features: "Includes product catalog, order management, and smooth checkout system.",
    link: "https://avjfarm.vercel.app/",
    technologies: ["html5", "css3", "javascript", "php", "mysql"]
  }
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div>
      <HeaderPage />
      <ParticleBackground />

      <main>
        <section className="proyectos mas-proyect" id="proyectos">
          <h1 className="heading" data-section="Nav" data-value="projects">
            <FormattedMessage id='projects' defaultMessage='Projects' />
          </h1>
          <nav className="navbar nav-proj">
            <NavLink to="/project" offset={-150} duration={500}>
              <FormattedMessage id='site-web' defaultMessage='Websites' />
            </NavLink>
          </nav>
        </section>

        <section className="projects__grid paginas-web">
          {projectsData.map(project => (
            <div className="projects__item" key={project.id}>
              <a onClick={() => openModal(project)}>
                <img src={proyectsImg(`./${project.img}`)} alt={project.title} className="projects__img" />
                <div className="projects__overlay">
                  <h3>{project.title}</h3>
                </div>
              </a>
            </div>
          ))}
        </section>
      </main>

      {selectedProject && (
        <Modal estado={true} cambiarEstado={closeModal}>
          <div className="content-modal">
            <div className="pw-content">
              <div className="eins-modal-preview">
                <img src={proyectsImg(`./${selectedProject.preview}`)} alt={selectedProject.title} />
              </div>
              <div className="eins-modal-text">
                <p>{selectedProject.description}</p>
                <p>{selectedProject.features}</p>
                <div className="eins-modal-text-2">
                  <span>Link:</span> <a href={selectedProject.link} target="_blank">{selectedProject.title} Live</a>
                </div>
                <div className="eins-modal-text-3">
                  <span>Used technology:</span>
                  <div className="eins-modal-tec">
                    {selectedProject.technologies.map(tech => (
                      <img 
                        key={tech} 
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`} 
                        alt={tech} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}

      <ScrollToTop />
      <Footer />
    </div>
  );
}

export default Project;
