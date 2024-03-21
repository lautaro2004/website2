import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/shot-alecarp.png"
          title="LandingPage Alecarp"
          description="Reimaginamos la identidad en línea de una carpintería con un nuevo sitio web y un logo renovado, resaltando su artesanía con un toque moderno."
        />
        <ProjectCard
          src="/shot-sprayette2.png"
          title="LandingPage Sprayette"
          description="Desarrollamos la landing del curso de manicura de Sprayette, basándonos en el diseño proporcionado para garantizar una experiencia excepcional"
        />
        <ProjectCard
          src="/shot-konqrit.png"
          title="LandingPage Konqrit"
          description="Desarrollamos la sección de novedades en la landing de Konqrit, con base en el diseño provisto para asegurar una experiencia excepcional."
        />
      </div>
    </div>
  );
};

export default Projects;
