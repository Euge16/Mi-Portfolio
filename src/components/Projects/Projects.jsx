import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 0,
      title: "Sistema de Gestión de PPP y TFI (SG-PPP-TFI) - UNLa",
      description:
        "Trabajo Final Integrador de la Licenciatura en Sistemas orientado a digitalizar la gestión y el seguimiento de las Prácticas Preprofesionales y los Trabajos Finales Integradores.",
      technologies: [
        "NestJS",
        "TypeScript",
        "TypeORM",
        "MySQL",
        "Docker",
        "JWT",
        "RBAC",
        "Postman",
      ],
      github:
        "https://github.com/unla-investigacion-desarrollo/back-gestion-ppps-tfis",
      features: [
        "Relevamiento de procesos, definición de reglas de negocio, flujos de estado y documentación funcional",
        "Diseño del modelo de datos relacional en MySQL con TypeORM",
        "Desarrollo de API REST modular con NestJS y TypeScript (controladores, servicios y validaciones de negocio)",
        "Autenticación con JWT, encriptación de contraseñas con bcrypt y control de acceso basado en roles (RBAC) mediante Guards",
        "Contenerización de base de datos con Docker y validación de más de 50 endpoints en Postman",
      ],
      period: "2025 - 2026",
      role: "Backend & Análisis Funcional",
    },
    {
      id: 1,
      title: "Stockearte - Módulo de Catálogo de Productos con SOAP",
      description:
        "Colaboré en el desarrollo de un módulo adicional para 'Stockearte', un sistema de gestión de stock distribuido. Permite gestionar catálogos de productos y exportarlos a PDF mediante servicios SOAP y API REST.",
      technologies: [
        "Java",
        "C#",
        "SOAP",
        "REST API",
        "MongoDB",
        "Git",
        "Trello",
        "Swagger",
        "XML",
      ],
      githubServer: "https://github.com/Delbelt/Soap-G1-Server",
      githubClient: "https://github.com/Delbelt/Soap-G1-Client",
      features: [
        "CreateCatalog - Creación de nuevos catálogos asociados a una tienda",
        "ExportPdf - Generación de archivo PDF con productos del catálogo (colores, talles y fotos)",
        "AddProductCatalog - Adición de productos existentes a catálogos seleccionados",
        "CRUD completo para gestión de catálogos de productos",
        "Manejo de excepciones y validaciones en operaciones de catálogos",
      ],
      period: "Oct 2024 - Nov 2024",
      role: "Desarrollo Backend",
    },
    {
      id: 2,
      title: "Stockearte - Sistema de Gestión de Stock con gRPC",
      description:
        "Colaboré en el desarrollo de 'Stockearte', un sistema distribuido de gestión de stock para cadenas de tiendas de indumentaria, utilizando gRPC entre un servidor en Java y un cliente en C#.",
      technologies: ["Java", "C#", "gRPC", "SQL", "Git", "Trello", "Swagger"],
      githubServer: "https://github.com/Delbelt/Grpc-G1-Server",
      githubClient: "https://github.com/Delbelt/Grpc-G1-Client",
      features: [
        "Diseñé e implementé la entidad Store con todos sus atributos",
        "Gestión completa de tiendas (creación, habilitación/deshabilitación)",
        "Asignación y desasignación de productos y usuarios a tiendas",
        "Comunicación gRPC entre Java (servidor) y C# (cliente)",
        "Generación de archivos .proto para contratos de comunicación",
      ],
      period: "Sep 2024 - Nov 2024",
      role: "Desarrollo Backend",
    },
    {
      id: 3,
      title: "Servicio de Traducción Inglés-Español con Sockets",
      description:
        "Desarrollé un sistema cliente-servidor en C++ que permite la traducción de palabras del inglés al español mediante comunicación por sockets.",
      technologies: ["C++", "Sockets", "Cliente-Servidor"],
      github: "https://github.com/Euge16/Codigo-TP-Redes-Lopez-Maria-Eugenia",
      features: [
        "Autenticación de usuarios con control de intentos fallidos",
        "Traducción inglés-español en tiempo real",
        "Gestión de usuarios y desbloqueo de cuentas bloqueadas",
        "Registro de actividades del sistema",
        "Almacenamiento de traducciones en archivo",
      ],
      period: "Ago 2023 - Oct 2023",
      role: "Desarrollo completo",
    },
  ];

  return (
    <section id="proyectos" className="projects-section">
      <h2>Mis Proyectos</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              <div className="project-meta">
                <span className="project-period">{project.period}</span>
                <span className="project-role">{project.role}</span>
              </div>
            </div>

            <div className="project-content">
              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Mi participación y logros:</h4>
                <ul>
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {(project.githubServer ||
                project.githubClient ||
                project.github) && (
                <div className="project-links">
                  {project.githubServer && (
                    <a
                      href={project.githubServer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      Servidor (GitHub)
                    </a>
                  )}
                  {project.githubClient && (
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      Cliente (GitHub)
                    </a>
                  )}
                  {project.github && !project.githubServer && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="github-link"
                    >
                      Código (GitHub)
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
