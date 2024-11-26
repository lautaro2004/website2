import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Mis proyectos
      </h1>
      <div className="flex flex-wrap gap-5 px-10 justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/2 flex justify-center">
          <ProjectCard
            src="/shot-alecarp.png"
            title="LandingPage Alecarp"
            description="Reimaginamos la identidad en línea de una carpintería con un nuevo sitio web y un logo renovado, resaltando su artesanía con un toque moderno."
            href="https://alecarp.com.ar/"
          />
        </div>
      </div>
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Proyectos en los que participamos
      </h1>
      <div className="flex flex-wrap gap-5 px-10 justify-center">
        <div className="w-full sm:w-1/2 lg:w-1/2 flex justify-center">
          <ProjectCard
            src="/shot-sprayette2.png"
            title="LandingPage Sprayette"
            description="Trabajé como programador freelance junto a Zanydev en el desarrollo de la landing del curso de manicura de Sprayette, basándonos en el diseño proporcionado para garantizar una experiencia excepcional."
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 flex justify-center">
          <ProjectCard
            src="/shot-konqrit.png"
            title="LandingPage Konqrit"
            description="Colaboré como programador freelance junto a Zanydev en el desarrollo de la sección de novedades en la landing de Konqrit, siguiendo el diseño provisto para asegurar una experiencia excepcional."
          />
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/2 flex justify-center">
          <ProjectCard
            src="/shot-peabody.png"
            title="Desarrollo Web Multi País para Peabody"
            description="Colaboré en el desarrollo de la web multi país para Peabody, incluyendo la implementación del ABM (Alta, Baja y Modificación) de productos y la creación de una API robusta. Trabajé en la integración de funcionalidades clave y en la optimización de la experiencia del usuario, asegurando que la plataforma ofreciera un rendimiento eficiente y una experiencia de usuario excepcional en varios países."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
