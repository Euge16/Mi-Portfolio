import "./Skills.css";
import { FaDatabase, FaTools, FaProjectDiagram, FaCode } from "react-icons/fa";

const Skills = () => {
  const skillCategories = [
    {
      title: "Lenguajes",
      icon: <FaCode />,
      skills: ["JavaScript", "TypeScript", "Java", "C", "C++"],
    },
    {
      title: "Frontend",
      icon: <FaProjectDiagram />,
      skills: ["ReactJS", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: <FaProjectDiagram />,
      skills: ["Node.js", "Express.js", "Spring Boot"],
    },
    {
      title: "Bases de Datos",
      icon: <FaDatabase />,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Herramientas",
      icon: <FaTools />,
      skills: ["Git", "GitHub", "GitLab", "Trello"],
    },
    {
      title: "Metodologías",
      icon: <FaProjectDiagram />,
      skills: ["Scrum", "Agile", "Lean Inception", "User Stories"],
    },
  ];

  return (
    <section id="habilidades" className="skills-section">
      <div className="skills-container">
        <h2>Habilidades Técnicas</h2>
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
