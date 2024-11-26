import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href?: string; // Prop opcional para el enlace
}

const ProjectCard = ({ src, title, description, href }: Props) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300 ease-in-out"
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 text-sm font-medium z-30" // Asegurando que el enlace está por encima
            >
              Ver más
            </a>
          )}
        </div>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
