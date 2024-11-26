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
      className={`relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transition-transform duration-300 ease-in-out ${
        href ? "cursor-pointer" : ""
      } hover:scale-110`}
      onClick={() => {
        if (href) {
          window.location.href = href; // Redirige al enlace proporcionado
        }
      }}
    >
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
