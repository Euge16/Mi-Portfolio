import "./Skills.css";
import {
  FaDatabase,
  FaTools,
  FaServer,
  FaCode,
  FaShieldAlt,
  FaClipboardList,
} from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend y Lenguajes",
      icon: <FaServer />,
      skills: [
        "NestJS",
        "Node.js",
        "Express.js",
        "TypeScript",
        "JavaScript",
        "Java",
        "C#",
      ],
    },
    {
      title: "Bases de Datos",
      icon: <FaDatabase />,
      skills: ["MySQL", "SQL", "TypeORM", "Modelado Relacional", "MongoDB"],
    },
    {
      title: "APIs y Seguridad",
      icon: <FaShieldAlt />,
      skills: ["REST", "JWT", "RBAC", "Swagger", "SOAP", "gRPC", "WebSockets"],
    },
    {
      title: "Análisis Funcional",
      icon: <FaClipboardList />,
      skills: [
        "Relevamiento de procesos",
        "Reglas de negocio",
        "Requerimientos",
        "Casos de uso",
        "Scrum",
      ],
    },
    {
      title: "Herramientas",
      icon: <FaTools />,
      skills: ["Docker", "Postman", "Git", "GitHub", "GitLab", "Trello"],
    },
    {
      title: "Frontend Complementario",
      icon: <FaCode />,
      skills: ["React", "React Native", "HTML", "CSS"],
    },
  ];

  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-container">
        <h2>Habilidades</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
