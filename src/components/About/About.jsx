import "./About.css";

const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <h1>Sobre Mí</h1>
        <p className="subtitle">
          Desarrolladora Full Stack | Estudiante de Licenciatura en Sistemas
        </p>

        <div className="about-content">
          <p>
            Desarrolladora Full Stack con experiencia en el stack MERN (MongoDB,
            Express.js, ReactJS, Node.js) y React Native. Recientemente completé
            una experiencia como Desarrolladora Trainee en Vortex, donde trabajé
            en el desarrollo de aplicaciones móviles utilizando React Native y
            metodologías ágiles Scrum. Como estudiante avanzada de Licenciatura
            en Sistemas, busco mi próxima oportunidad laboral como
            Desarrolladora Junior donde pueda contribuir con mis habilidades
            técnicas y pasión por el aprendizaje continuo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
