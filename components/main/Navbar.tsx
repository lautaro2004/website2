"use client";

import Image from "next/image";
import React, {useState} from "react";
import ContactModal from "../sub/ContactModal"

const Navbar = () => {

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactModalOpen = () => {
    setIsContactModalOpen(true);
  };

  const handleContactModalClose = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/Nube-SNF.png"
            alt="logo"
            width={55}
            height={65}
            className="cursor-pointer hover:animate-slowspin mr-5"
          />

          <span className="font-bold ml-[0px] hidden md:block text-gray-200">
            Digitize
          </span>
        </a>

        <div className="w-[500px] h-full mt-5 flex flex-row items-center justify-between md:mr-20 hidden md:block">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              Inicio
            </a>
            <a href="#skills" className="cursor-pointer">
              Servicios
            </a>
            <a href="#projects" className="cursor-pointer">
              Proyectos
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          <button onClick={handleContactModalOpen}>
            <Image src="/mail.svg" alt="Email" width={35} height={35}/>
          </button>
        </div>
      </div>
      <ContactModal isOpen={isContactModalOpen} onClose={handleContactModalClose} />
    </div>
  );
};

export default Navbar;
