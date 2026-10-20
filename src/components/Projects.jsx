import { useEffect, useState } from "react";
import { projects } from "../data/projects.js";
import { getProjects } from "../services/projectService.js";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetailsSection from "./ProjectDetailsSection.jsx";

const Projects = () => {
  const [projectList, setProjectList] = useState(projects);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    getProjects({ signal: controller.signal }).then(setProjectList).catch((error) => {
      if (error.name !== "AbortError") console.error("Could not load projects.", error);
    });
    return () => controller.abort();
  }, []);

  const handleAboutProject = (project) => {
    setSelectedProject((current) => current?.id === project.id ? null : project);
  };

  return (
    <>
      <section id="projects" className="section-padding projects-section bg-white dark:bg-zinc-900/50">
        <div className="container-shell">
          <div className="max-w-3xl">
            <span className="eyebrow">Featured Projects</span>
            <h2 className="section-title mt-5">Real Projects. Real Solutions.</h2>
            <p className="section-copy">
              Explore my selected projects built with the MERN stack, showcasing my skills in frontend development, backend engineering, database management, and REST API integration. Each project reflects my focus on clean code, responsive design, and practical solutions to real-world problems.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {projectList.map((project) => (
              <ProjectCard
                key={project.id ?? project.name}
                project={project}
                onAboutProject={handleAboutProject}
                isSelected={selectedProject?.id === project.id}
              />
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <ProjectDetailsSection
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
