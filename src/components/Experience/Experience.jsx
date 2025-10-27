import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Desarrolladora Trainee, Vortex (Remoto)",
      period: "Jul. 2025 - sept. 2025",
      responsibilities: [
        "Maquetación y desarrollo de componentes en React Native a partir de diseños en Figma",
        "Implementación de lógica front-end para la interactividad de las pantallas",
        "Control de versiones y colaboración en equipo utilizando GitLab",
      ],
    },
  ];

  return (
    <section id="experiencia" className="experience-section">
      <h2>Experiencia</h2>
      <div className="experiences-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h3>{exp.title}</h3>
            <span className="period">{exp.period}</span>
            <ul>
              {exp.responsibilities.map((resp, i) => (
                <li key={i}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
