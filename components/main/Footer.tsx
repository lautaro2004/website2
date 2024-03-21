import React from "react";
import { FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-opacity bg-black bg-opacity-85 text-gray-200 shadow-lg p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-row items-center justify-around mb-4">
          <div className="flex flex-col items-center justify-start">
            <div className="font-bold text-lg mb-2">Contact</div>
            <p className="flex items-center my-2 cursor-pointer">
              <FaInstagram />
              <span className="ml-2">@digitize.arg</span>
            </p>
            <p className="flex items-center my-2 cursor-pointer">
                <FaEnvelope />
              <span className="ml-2">digitize.arg@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="text-sm text-center">
          &copy; Digitize 2024. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
