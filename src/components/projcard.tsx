import React from "react";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="proj-card bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-violet-400 transition-shadow duration-700 flex flex-col gap-3">
      <h3 className="text-xl font-bold text-violet-900">{project.name}</h3>
      <p className="text-gray-200">{project.desc}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="bg-violet-900 text-gray-200 px-2 py-1 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 text-gray-200 hover:underline"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;