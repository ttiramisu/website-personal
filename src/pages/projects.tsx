import React from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/projcard";
import TextType from "../components/TextType";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950 py-16 px-4">
      <h1 className="text-4xl font-bold text-violet-400 text-center mb-12">
        <TextType
          text={["Projects in Z:\\"]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
