import "./About.css";

const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <h1>Sobre Mí</h1>
        <p className="subtitle">
          Analista Programadora Universitaria | Desarrolladora Junior
        </p>

        <div className="about-content">
          <p style={{ marginBottom: "1.2rem" }}>
            Soy Analista Programadora Universitaria y estudiante avanzada de la
            Licenciatura en Sistemas. Mi perfil combina dos pasiones: el
            análisis funcional, donde comprendo las necesidades del negocio, y
            el desarrollo backend, donde las transformo en soluciones técnicas.
          </p>
          <p style={{ marginBottom: "0" }}>
            Cuento con experiencia trainee trabajando en equipos ágiles, donde
            participé en el desarrollo de aplicaciones y en la implementación de
            funcionalidades, priorizando el trabajo colaborativo y la mejora
            continua. Actualmente busco una oportunidad junior donde pueda
            seguir creciendo profesionalmente, aportar mis conocimientos y
            continuar aprendiendo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
