import "./App.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaUser,
  FaCode,
  FaLaptopCode,
  FaBriefcase,
  FaAddressCard,
  FaDocker,
} from "react-icons/fa";
import { SiNestjs, SiTypescript, SiMysql } from "react-icons/si";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">María Eugenia López</div>
          <ul className="nav-links">
            <li>
              <a href="#sobre-mi">
                <FaUser className="nav-icon" /> Sobre Mí
              </a>
            </li>
            <li>
              <a href="#proyectos">
                <FaCode className="nav-icon" /> Proyectos
              </a>
            </li>
            <li>
              <a href="#habilidades">
                <FaLaptopCode className="nav-icon" /> Habilidades
              </a>
            </li>
            <li>
              <a href="#experiencia">
                <FaBriefcase className="nav-icon" /> Experiencia
              </a>
            </li>
            <li>
              <a href="#contacto">
                <FaAddressCard className="nav-icon" /> Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="hero">
        <div className="hero-content">
          <h1>Desarrolladora Backend & Analista Funcional</h1>
          <div className="tech-stack">
            <span className="tech-item">
              <SiNestjs className="tech-icon" /> NestJS
            </span>
            <span className="tech-item">
              <SiTypescript className="tech-icon" /> TypeScript
            </span>
            <span className="tech-item">
              <SiMysql className="tech-icon" /> MySQL
            </span>
            <span className="tech-item">
              <FaDocker className="tech-icon" /> Docker
            </span>
          </div>
          <a href="#proyectos" className="cta-button">
            <FaCode className="button-icon" />
            Ver mis proyectos
          </a>
        </div>
      </section>

      {/* Secciones principales */}
      <About />
      <Projects />
      <Skills />
      <Experience />

      {/* Footer */}
      <footer id="contacto" className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-contact">
              <h3>Contacto</h3>
              <div className="contact-links">
                <a
                  href="mailto:lop.mariaeugenia@gmail.com"
                  className="contact-link"
                >
                  <FaEnvelope className="contact-icon" />
                  lop.mariaeugenia@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mariaeugenialopez-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaLinkedin className="contact-icon" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Euge16"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaGithub className="contact-icon" />
                  GitHub
                </a>
              </div>
            </div>

            <div className="footer-nav">
              <h3>Navegación</h3>
              <div className="nav-links-footer">
                <a href="#sobre-mi">
                  <FaUser className="nav-icon-footer" /> Sobre Mí
                </a>
                <a href="#proyectos">
                  <FaCode className="nav-icon-footer" /> Proyectos
                </a>
                <a href="#habilidades">
                  <FaLaptopCode className="nav-icon-footer" /> Habilidades
                </a>
                <a href="#experiencia">
                  <FaBriefcase className="nav-icon-footer" /> Experiencia
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>
              &copy; 2026 María Eugenia López. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
