import "./About.css";

const About = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="about-container">
        <h1>Sobre Mí</h1>
        <p className="subtitle">
          Analista Programadora Universitaria | Backend Junior & Análisis
          Funcional
        </p>

        <div className="about-content">
          <p>
            Soy Analista Programadora Universitaria y estudiante avanzada de la
            Licenciatura en Sistemas en la Universidad Nacional de Lanús (UNLa),
            actualmente cursando mi Trabajo Final Integrador. Mi perfil combina
            el análisis funcional —relevamiento de procesos, reglas de negocio y
            documentación— con el desarrollo backend en NestJS, TypeScript,
            TypeORM y MySQL.
          </p>
          <p>
            Cuento con experiencia trainee trabajando en equipos ágiles bajo
            Scrum, priorizando la comunicación clara, la organización y la
            calidad técnica. Busco incorporarme a un equipo como Desarrolladora
            Backend Junior o Analista Funcional Junior para seguir creciendo y
            aportar soluciones concretas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
