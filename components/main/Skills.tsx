
import React from "react";

import SkillText from "../sub/SkillText";
import ServiceItem from "../sub/ServiceItem"

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        <ServiceItem
          icon="/search1.png"
          title="Consultoria IT"
          description="Proporcionamos información y respuestas a cuestiones específicas."
          steps={["Analizamos", "Investigamos", "Proponemos soluciones"]}
        />
        <ServiceItem
          icon="/code-circle1.png"
          title="Servicio de Diseño Web"
          description="Creamos sitios web hermosos y funcionales para tu negocio."
          steps={["Diseño personalizado", "Desarrollo responsive", "Optimización SEO"]}
        />
        <ServiceItem
          icon="/24-hours1.png"
          title="Servicio de Diseño Web"
          description="Creamos sitios web hermosos y funcionales para tu negocio."
          steps={["Diseño personalizado", "Desarrollo responsive", "Optimización SEO"]}
        />
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
