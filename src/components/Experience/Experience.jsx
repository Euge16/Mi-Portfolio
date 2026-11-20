import "./Experience.css";

const Experience = () => {
  const experiences = [
    {
      title: "Trainee Mobile - Programa Akademi | Vortex (Remoto)",
      period: "Mar. 2025 - Sept. 2025",
      responsibilities: [
        "Programa intensivo que combinó formación en desarrollo Full Stack con una práctica profesionalizadora de tres meses como Trainee Mobile.",
        "Maqueté e implementé lógica de interfaz para componentes móviles en React Native a partir de diseños en Figma.",
        "Conecté componentes de interfaz con la lógica de negocio y participé en el consumo de servicios.",
        "Trabajé con GitLab, control de versiones y manejo de ramas en un entorno colaborativo bajo Scrum.",
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
